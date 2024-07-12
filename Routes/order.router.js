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

// Route to get a specific order by ID
router.get("/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json(order);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Failed to fetch order" });
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

// New route to update order progress
router.put("/:id", async (req, res) => {
  try {
    const { orderProgress } = req.body;
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { orderProgress },
      { new: true }
    );
    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json(updatedOrder);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Failed to update order progress" });
  }
});

module.exports = router;
