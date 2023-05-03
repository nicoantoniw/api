const path = require('path');

const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');
const policyRoutes = require('./routes/policy');
const userRoutes = require('./routes/user');
const databaseRoutes = require('./routes/database');

const app = express();
const dbURI = 'mongodb+srv://new_user:viHgGYDTizzYsFxe@cluster0.a2jl67s.mongodb.net/?retryWrites=true&w=majority';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Expose-Headers', 'Authorization');

    next();
});

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/policy', policyRoutes);
app.use('/api/database', databaseRoutes);

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
});

mongoose
    .connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(succes => {
        app.listen(process.env.PORT || 3000);
        console.log('Database connected.');
    })
    .catch(err => console.log(err));
