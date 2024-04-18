const express = require('express');
const productsController = require('../controllers/productsController.js')

const productRouter = express.Router();

productRouter.route('/')
.get(productsController.getAllProducts)
.post(productsController.addProducts)

productRouter.route('/:id')
.get(productsController.putProducts)
.post(productsController.deleteProducts)


module.exports = productRouter;