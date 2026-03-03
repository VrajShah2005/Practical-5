const express = require('express');
const mongoose = require('mongoose');
const errorHandler = require('./middleware/errorHandler');
const app = express();

app.use(express.json()); // JSON data parse karne ke liye

const Product = require('./models/Product');

// ==========================================
// MINIMAL CRUD OPERATIONS FOR PRODUCTS
// ==========================================

// 1. CREATE (Insert) - POST
app.post('/products', async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json({ message: "Product Created!", data: newProduct });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

// 2. READ (Fetch All) - GET
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

// 3. READ SINGLE (Fetch One by ID) - GET
app.get('/products/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found!" });
        res.status(200).json(product);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

// 4. UPDATE (Modify) - PUT
app.put('/products/:id', async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ message: "Product Updated!", data: updatedProduct });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

// 5. DELETE (Remove) - DELETE
app.delete('/products/:id', async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Product Deleted!" });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

// ==========================================

mongoose.connect('mongodb://127.0.0.1:27017/my_practical_db')
    .then(() => console.log("Local MongoDB Connected Successfully!"))
    .catch(err => console.error("Database Connection Failed:", err));

// Error Handling Middleware (Hamesha end mein)
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));