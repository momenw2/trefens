const express = require("express");
const router = express.Router();
const Product = require("../Models/product.model");

router.get("/", async (req, res, next) => {
  try {
    const result = await Product.find();
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});

// Add a new topic
router.post("/", async (req, res, next) => {
  try {
    const product = new Product(req.body);
    const result = await product.save();
    res.send(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
