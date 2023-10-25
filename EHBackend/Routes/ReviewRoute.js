const express = require("express");
const ReviewController = require("../Controllers/ReviewController");
const AuthController = require("../Controllers/AuthController");
const reviewRouter = express.Router();

reviewRouter.use(AuthController.protect);
reviewRouter
  .route("/")
  .get(ReviewController.getAllReviews)
  .post(ReviewController.postOneReview);

module.exports = reviewRouter;
