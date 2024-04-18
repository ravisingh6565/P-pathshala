const express = require("express");
// const { getAllProducts } = require("../controllers/productsController");
const  productsController = require("../controllers/productsController.js");


const productRouter = express.Router();

productRouter.route('/')
.get(productsController.getAllProducts)
.post(productsController.addProducts)



module.exports = productRouter;