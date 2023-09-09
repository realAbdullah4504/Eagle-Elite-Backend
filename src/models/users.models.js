const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true },

    billingAddress: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        country: { type: String, required: true },
        street1: { type: String, required: true },
        street2: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zipCode: { type: String, required: true }
    },
    shippingAddress: {
        isSameAddress: {type:Boolean},
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        country: { type: String, required: true },
        street1: { type: String, required: true },
        street2: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zipCode: { type: String, required: true }
    }
},{
    timestamps: true,
});

const User = mongoose.model('User', userSchema);
module.exports = User;