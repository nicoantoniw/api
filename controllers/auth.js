const jwt = require('jsonwebtoken');

const User = require('../models/user');

exports.login = async (req, res, next) => {
    // there is not a password field in users so password is not used for authentication
    const email = req.body.email;
    console.log(email);
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            const error = new Error('User not found');
            error.statusCode = 404;
            throw error;
        }
        const token = jwt.sign(
            {
                name: user.name,
                email: user.email,
                role: user.role,
                userId: user.id,
                mongoId: user._id.toString()
            },
            'nodetest',
            { expiresIn: '10h' }
        );
        res.status(200).json({
            token,
            mongoId: user._id.toString(),
            userId: user.id,
            role: user.role,
            email: user.email,
            name: user.name,
        });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};
