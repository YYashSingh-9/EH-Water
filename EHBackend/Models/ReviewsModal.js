const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema({
  details: {
    type: String,
    required: [true, "Review details are necessary"],
  },
  userId: mongoose.Schema.ObjectId,
  issueId: mongoose.Schema.ObjectId,
});

const ReviewModal = mongoose.model("ReviewModal", ReviewSchema);
module.exports = ReviewModal;
