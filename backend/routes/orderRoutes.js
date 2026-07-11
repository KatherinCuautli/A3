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

module.exports = router;