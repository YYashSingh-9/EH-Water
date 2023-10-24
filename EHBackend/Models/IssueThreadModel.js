const mongoose = require("mongoose");

const IssueSchema = mongoose.Schema({
  Title: {
    type: String,
    required: [true, "Your issue must have a title"],
  },
  State: {
    type: String,
    required: [true, "Please provide state."],
  },
  City: {
    type: String,
    required: [true, "Please provide your city name."],
  },
  Details: {
    type: String,
    required: [true, "Issue details are necessary"],
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    required: [true, "User Id is missing here.."],
  },
});

const IssueThreadModel = mongoose.model("IssueThreadModel", IssueSchema);
module.exports = IssueThreadModel;
