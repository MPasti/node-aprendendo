const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  createDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("products", productSchema);
