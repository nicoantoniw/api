const User = require('../models/user');
const Policy = require('../models/policy');

exports.getUserFromPolicy = async (req, res, next) => {
    try {
        const policy = await Policy.findOne({ id: req.params.policyId })
            .populate('clientId', {
                name: 1, id: 1, email: 1, role: 1
            });
        if (!policy) {
            const error = new Error('No policy found');
            error.statusCode = 404;
            throw error;
        }
        const user = policy.clientId;
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

exports.getPoliciesFromUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ id: req.params.userId });
        if (!user) {
            const error = new Error('No user found');
            error.statusCode = 404;
            throw error;
        }
        const policies = await Policy.find({ clientId: user._id });
        if (policies.length < 1) {
            const error = new Error('No policies found');
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json({
            policies
        });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

