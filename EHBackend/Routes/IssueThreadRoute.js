const express = require("express");
const issueThreadRouter = express.Router();
const IssueThreadController = require("../Controllers/IssueThreadController");
const AuthController = require("../Controllers/AuthController");

issueThreadRouter.use(AuthController.protect);

issueThreadRouter.route("/").post(IssueThreadController.createIssueThread);

module.exports = issueThreadRouter;
