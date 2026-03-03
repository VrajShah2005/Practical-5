const Product = require('../models/Product');

// 1. CREATE - MongoDB mein data dalna
exports.createProduct = async (req, res, next) => {
    try {
        const product = new Product({ name: "Gaming Mouse", price: 1200, category: "Electronics" });
        await product.save(); // Ye direct DB mein save karega
        res.send("Product saved in MongoDB!");
    } catch (err) { next(err); }
};

// 2. READ - MongoDB se data nikalna
exports.getAllProducts = async (req, res, next) => {
    try {
        const data = await Product.find(); // DB se saara data uthayega
        res.json(data);
    } catch (err) { next(err); }
};

// 3. UPDATE - MongoDB mein data badalna
exports.updateProduct = async (req, res, next) => {
    try {
        // Maan lo hume 'Gaming Mouse' ka price badalna hai
        await Product.updateOne({ name: "Gaming Mouse" }, { price: 1000 });
        res.send("Product updated in MongoDB!");
    } catch (err) { next(err); }
};

// 4. DELETE - MongoDB se data hatana
exports.deleteProduct = async (req, res, next) => {
    try {
        await Product.deleteOne({ name: "Gaming Mouse" });
        res.send("Product deleted from MongoDB!");
    } catch (err) { next(err); }
};