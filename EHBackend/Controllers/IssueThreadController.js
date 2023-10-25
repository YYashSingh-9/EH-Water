const IssueThreadModel = require("../Models/IssueThreadModel");
const DefaultController = require("./DefaultController");

exports.createIssueThread =
  DefaultController.DefaultCreateOne(IssueThreadModel);
exports.getAllIssueThreads = DefaultController.DefaultReadAll(IssueThreadModel);
exports.getOneIssueThread = DefaultController.DefaultGetOne(IssueThreadModel);
