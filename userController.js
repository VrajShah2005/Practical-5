exports.register = (req, res, next) => {
    try {
        const { email, password } = req.body;
        // Validation: Check if data exists
        if (!email || !password) {
            const error = new Error("Email and Password are required!");
            error.status = 400;
            throw error;
        }
        res.status(201).json({ success: true, message: "User registered successfully!" });
    } catch (err) {
        next(err);
    }
};