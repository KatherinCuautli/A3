const express = require("express");
const router = express.Router();
const MenuItem = require("../models/MenuItem");

// GET menu items
router.get("/", async (req, res) => {
    try {
        const menu = await MenuItem.find();
        res.json(menu);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST new menu item
router.post("/", async (req, res) => {
    try {
        const item = new MenuItem(req.body);
        const savedItem = await item.save();

        res.status(201).json(savedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Menu items (temporary seed)
router.get("/seed", async (req, res) => {
    try {
        await MenuItem.deleteMany();

        const menu = [
            {
                name: "Enchiladas",
                description: "Corn tortillas filled with chicken and topped with salsa.",
                price: 13.99,
                image: "enchiladas.jpg",
                category: "Main Course"},
            {
                name: "Tacos al Pastor",
                description: "Marinated pork tacos with pineapple.",
                price: 6.99,
                image: "tacos.jpg",
                category: "Tacos"},
            {
                name: "Quesadillas",
                description: "Flour tortilla stuffed with cheese.",
                price: 8.99,
                image: "quesadillas.jpg",
                category: "Main Course"},
            {
                name: "Tostadas",
                description: "Crispy tortilla topped with beans and meat.",
                price: 10.99,
                image: "tostadas.jpg",
                category: "Main Course"},
            {
                name: "Nachos",
                description: "Loaded nachos with cheese and jalapeños.",
                price: 7.99,
                image: "nachos.jpg",
                category: "Appetizer"},
            {
                name: "Torta",
                description: "Mexican sandwich served on fresh bread.",
                price: 15.99,
                image: "torta.jpg",
                category: "Sandwich"
            }
        ];

        await MenuItem.insertMany(menu);

        res.json({ message: "Menu seeded successfully!" });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;