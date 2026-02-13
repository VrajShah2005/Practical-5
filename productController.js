let products = [{ id: 1, name: "Phone", price: 20000 }];

exports.getAllProducts = (req, res) => {
    res.status(200).json(products);
};

exports.createProduct = (req, res, next) => {
    try {
        const { name, price } = req.body;

        // Data Validation
        if (!name || !price) {
            const error = new Error("Name and Price are required!");
            error.status = 400;
            throw error;
        }

        const newProduct = { id: products.length + 1, name, price };
        products.push(newProduct);
        res.status(201).json(newProduct);
    } catch (err) {
        next(err); // Error handler ko bhej do
    }
};