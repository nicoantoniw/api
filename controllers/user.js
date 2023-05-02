const User = require('../models/user');
const Policy = require('../models/policy');

exports.getUserByParameter = async (req, res, next) => {
    try {
        const user = await User.findOne({ $or: [{ id: req.query.parameter }, { name: req.query.parameter }] });
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