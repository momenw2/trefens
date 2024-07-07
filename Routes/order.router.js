const express = require("express");
const router = express.Router();
const Order = require("../Models/order.model");

router.get("/", async (req, res, next) => {
  try {
    const result = await Order.find();
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});

// Add a new topic
router.post("/", async (req, res, next) => {
  try {
    const order = new Order(req.body);
    const result = await order.save();
    res.send(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
