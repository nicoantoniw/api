const User = require('../models/user');
const Policy = require('../models/policy');

exports.getUserFromPolicy = async (req, res, next) => {
    try {
        const policy = await Policy.findOne({ id: req.query.policyId })
            .populate('clientId', {
                name: 1, id: 1, email: 1, role: 1
            });
        if (!policy) {
            const error = new Error('No policy found');
            error.statusCode = 404;
            throw error;
        }
        console.log(policy);
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
