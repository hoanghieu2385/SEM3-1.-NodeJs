const mongoose = require('mongoose');

// Định nghĩa document
const productSchema = new mongoose.Schema({
    id: {
        type: String,
        required: [true, "id is required"]
    },
    product_name: {
        type: String,
        required: [true, "Product name is required"]
    },
});

// Tạo Model: 
const Product = mongoose.model('Product', productSchema);

module.exports = Product