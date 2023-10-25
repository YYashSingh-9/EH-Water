const ReviewDetails = require("../Models/ReviewsModal");
const DefaultController = require("./DefaultController");

exports.postOneReview = DefaultController.DefaultCreateOne(ReviewDetails);
exports.getAllReviews = DefaultController.DefaultReadAll(ReviewDetails);
