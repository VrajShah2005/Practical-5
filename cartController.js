const Cart = require('../models/Cart');

exports.addToCart = async (req, res, next) => {
    try {
        const { userId, productId, quantity } = req.body;
        
        // Find user's cart or create new one
        let cart = await Cart.findOne({ userId });
        
        if (cart) {
            cart.products.push({ productId, quantity });
            await cart.save();
        } else {
            cart = new Cart({ userId, products: [{ productId, quantity }] });
            await cart.save();
        }
        
        res.status(200).json({ success: true, cart });
    } catch (err) {
        next(err);
    }
};