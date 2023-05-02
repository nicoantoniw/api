const User = require('../models/user');
const Policy = require('../models/policy');

exports.getCertificate = async (req, res, next) => {
    try {
        const certificate = await Certificate.findOne({ user: req.userId })
            .populate('user', { username: 1, _id: 1 });

        if (!certificate) {
            const error = new Error('No certificate found');
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json({
            certificate
        });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

