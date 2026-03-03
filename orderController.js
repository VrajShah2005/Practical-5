const Order = require('../models/Order');

exports.placeOrder = async (req, res, next) => {
    try {
        const { userId, totalAmount } = req.body;
        const newOrder = new Order({ userId, totalAmount });
        await newOrder.save();
        res.status(201).json({ success: true, order: newOrder });
    } catch (err) {
        next(err);
    }
};