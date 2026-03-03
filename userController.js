const User = require('../models/User');

exports.register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        
        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            const error = new Error("User already exists!");
            error.status = 400;
            throw error;
        }

        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json({ success: true, message: "User saved to MongoDB!" });
    } catch (err) {
        next(err);
    }
};