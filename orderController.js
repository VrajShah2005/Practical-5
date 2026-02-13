exports.placeOrder = (req, res, next) => {
    try {
        // Simple logic: assume order is successful
        res.status(201).json({ success: true, message: "Order placed successfully!" });
    } catch (err) {
        next(err);
    }
};