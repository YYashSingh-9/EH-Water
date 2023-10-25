const express = require("express");
const ReviewController = require("../Controllers/ReviewController");
const AuthController = require("../Controllers/AuthController");
const reviewRouter = express.Router();

reviewRouter.route("/").get(ReviewController.getAllReviews);
reviewRouter.use(AuthController.protect);
reviewRouter.route("/").post(ReviewController.postOneReview);

module.exports = reviewRouter;
