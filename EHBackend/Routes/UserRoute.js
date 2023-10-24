const express = require("express");
const AuthController = require("../Controllers/AuthController");
const userRouter = express.Router();

userRouter.route("/signup").post(AuthController.signUpUser);
userRouter.route("/login").post(AuthController.loginUser);
userRouter.all(AuthController.protect);
userRouter.route("/update-password").patch(AuthController.updateMyPassword);

module.exports = userRouter;
