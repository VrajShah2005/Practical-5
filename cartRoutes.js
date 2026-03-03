const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// Route to add items to cart
router.post('/add', cartController.addToCart);

module.exports = router;