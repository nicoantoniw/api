const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const policySchema = new Schema({
    id: {
        type: String,
        required: true
    },
    amountInsured: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    inceptionDate: {
        type: Date,
        required: true
    },
    installmentPayment: {
        type: Boolean,
        required: true
    },
    clientId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Policy', policySchema);
