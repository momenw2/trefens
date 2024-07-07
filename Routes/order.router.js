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
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: "Failed to create order" });
  }
});

module.exports = router;
