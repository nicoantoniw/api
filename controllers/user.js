const User = require('../models/user');
const Policy = require('../models/policy');

exports.getUserById = async (req, res, next) => {
    try {
        const user = await User.findOne({ id: req.query.userId });
        if (!user) {
            const error = new Error('No user found');
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json({
            user
        });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.getUserByName = async (req, res, next) => {
    try {
        const user = await User.findOne({ name: req.query.name });
        if (!user) {
            const error = new Error('No user found');
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json({
            user
        });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};