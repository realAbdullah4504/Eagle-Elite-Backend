const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  //_id: { type: String },
  attributes: {
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    noInStocks: { type: Number},
    price: { type: Number, required: true },
    category: { type: String, required: true }
  }
},{
  timestamps: true,
});

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;