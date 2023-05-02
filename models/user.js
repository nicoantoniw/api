const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('User', userSchema);
