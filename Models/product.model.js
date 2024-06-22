const mongoose = require("mongoose");
const { stringify } = require("querystring");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  category: String,
  categoryData: [
    {
      name: String,
      price: Number,
      discount: Number,
      description: String,
      sizes: Array,
      images: Array,
    },
  ],
});

const product = mongoose.model("product", productSchema);

module.exports = product;
