var express = require('express');
var productController = require('../controller/productController.js');
var router = express.Router();

/* GET products listing. */
router.route('/')
        .get(productController.getProduct)
        .post(productController.createProduct)

module.exports = router;