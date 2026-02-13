let cart = []; // Dummy cart storage

exports.addToCart = (req, res, next) => {
    try {
        const { productId, quantity } = req.body;
        if (!productId || !quantity) {
            const error = new Error("Product ID and Quantity are required!");
            error.status = 400;
            throw error;
        }
        cart.push({ productId, quantity });
        res.status(200).json({ success: true, message: "Item added to cart", cart });
    } catch (err) {
        next(err);
    }
};