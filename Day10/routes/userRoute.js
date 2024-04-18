const express = require('express');
const userController = require('../controllers/usersControllers.js')

const userRouter = express.Router();

userRouter.route('/')
.get(userController.getUsers)
.post(userController.postUsers)

userRouter.route('/:id')
.put(userController.putUsers)
.delete(userController.deleteusers)


module.exports = userRouter;