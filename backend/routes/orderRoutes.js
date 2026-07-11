const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// GET all orders
router.get("/", async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
});

// POST new order
router.post("/", async (req, res) => {
    try {
        const order = new Order(req.body);
        const savedOrder = await order.save();

        res.status(201).json(savedOrder);
    } catch (err) {
        res.status(400).json(err);
    }
});

// UPDATE an order
router.put("/:id", async (req, res) => {
    try {

        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(updatedOrder);

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

// DELETE an order
router.delete("/:id", async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);

        res.json({
            message: "Order deleted successfully."
        });

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

module.exports = router;