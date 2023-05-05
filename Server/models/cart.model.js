const mongoose = require('mongoose');

const cartSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    itemPrice: { type: Number, required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true }
  },
  {
    versionKey: false
  }
);

const CartModel = mongoose.model('cart', cartSchema);

module.exports = { CartModel };
