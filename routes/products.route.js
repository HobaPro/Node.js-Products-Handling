const productsController = require('../controller/products.controller');

const router = require('express').Router();

router.get('/api/products', productsController.getProducts)

module.exports = router;