const express = require('express');
const userController = require('../controllers/usersControllers.js')

const userRouter = express.Router();

userRouter.route('/')
.get(userController.getUsers)
.post(userController.postUsers)

productRouter .route('/:id')
.put(userController.putUsers)
.delete(productsController.deleteusers)


module.exports = userRouter;