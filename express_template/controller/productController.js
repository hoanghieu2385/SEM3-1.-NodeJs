const Product = require('../models/productModel.js')

exports.createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(200).json({
            massage: "Product created successfully",
            data: product
        })
    } catch (err) {
        res.status(500).json({
            massage: "Product created fail",
            error: err.massage
        })
    }
};

exports.getProduct = async (req, res) => {
    try {
        const product = await Product.find()
        res.status(200).json({
            massage: "Product get successfully",
            data: product
        })
    } catch (err) {
        res.status(500).json({
            massage: "Product get fail",
            error: err.massage
        })
    }
};

