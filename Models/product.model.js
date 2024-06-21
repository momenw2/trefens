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
      sizes: [
        {
          size: String,
        },
      ],
    },
  ],
});

const product = mongoose.model("country", productSchema);

module.exports = product;
