const express = require("express");

const reviewsController = require("../controllers/reviewsController.js");

const reviewRouter = express.Router();

reviewRouter.route('/')
.get(reviewsController.getAllReviews)
.post(reviewsController.addReviews)

module.exports = reviewRouter;