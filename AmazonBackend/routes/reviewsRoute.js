const express = require("express");

const reviewsController = require("../controllers/reviewsController.js");

const reviewRouter = express.Router();

reviewRouter.route('/')
.get(reviewsController.getAllReviews)
.post(reviewsController.addReviews)

reviewRouter.route('/:id')
.put(reviewsController.replaceReviews)

module.exports = reviewRouter;