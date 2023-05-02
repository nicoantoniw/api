// This controller was only created to add the users and policies to the database from the endpoints.
const axios = require('axios');

const User = require('../models/user');
const Policy = require('../models/policy');

exports.addUsers = async (req, res, next) => {
    try {
        const url = 'https://www.mocky.io/v2/5808862710000087232b75ac';
        const response = await axios.get(url);
        const users = response.data.clients;
        let duplicatedUsers = 0;
        let createdUsers = 0;
        for (const user of users) {
            const databaseUser = await User.findOne({ email: user.email });
            if (!databaseUser) {
                const newUser = new User({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                });
                await newUser.save();
                createdUsers++;
            } else { duplicatedUsers++; }
        }
        res.status(200).json({
            message: `${createdUsers} users created and ${duplicatedUsers} duplicates`
        });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.addPolicies = async (req, res, next) => {
    try {
        const url = 'https://www.mocky.io/v2/580891a4100000e8242b75c5';
        const response = await axios.get(url);
        const policies = response.data.policies;
        let duplicatedPolicies = 0;
        let createdPolicies = 0;
        for (const policy of policies) {
            const databasePolicy = await Policy.findOne({ id: policy.id });
            if (!databasePolicy) {
                const user = await User.findOne({ id: policy.clientId });
                const newPolicy = new Policy({
                    id: policy.id,
                    amountInsured: policy.amountInsured,
                    email: policy.email,
                    inceptionDate: policy.inceptionDate,
                    installmentPayment: policy.installmentPayment,
                    clientId: user
                });
                await newPolicy.save();
                createdPolicies++;
            } else { duplicatedPolicies++; }
        }
        res.status(200).json({
            message: `${createdPolicies} policies created and ${duplicatedPolicies} duplicates`
        });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};
