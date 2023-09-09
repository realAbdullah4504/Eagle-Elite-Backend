const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: { 
        type:mongoose.SchemaTypes.ObjectId,
        ref:"User"
     },
    products: [{
        itemId: { type: String, required: true },
        count: { type: Number, default: 1 }
    }],
    totalAmount: { type: Number, default: 0 },
    orderStatus: { type: String, default: 'pending' }

}, {
    timestamps: true,
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;