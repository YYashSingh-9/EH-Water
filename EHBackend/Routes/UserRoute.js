const express = require("express");
const AuthController = require("../Controllers/AuthController");
const userRouter = express.Router();

userRouter.route("/").post(AuthController.signUpUser);

module.exports = userRouter;
