const express = require("express");
const IssueThreadController = require("../Controllers/IssueThreadController");
const AuthController = require("../Controllers/AuthController");
const issueThreadRouter = express.Router();

issueThreadRouter.use(AuthController.protect);

issueThreadRouter.route("/").post(IssueThreadController.createIssueThread);

module.exports = issueThreadRouter;
