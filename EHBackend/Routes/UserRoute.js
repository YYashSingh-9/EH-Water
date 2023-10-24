const express = require("express");
const AuthController = require("../Controllers/AuthController");
const UserController = require("../Controllers/UserController");
const userRouter = express.Router();

userRouter.route("/signup").post(AuthController.signUpUser);
userRouter.route("/login").post(AuthController.loginUser);
userRouter.use(AuthController.protect);
userRouter
  .route("/update-password")
  .patch(AuthController.getId, AuthController.updateMyPassword);
userRouter.route("/updateMe").patch(UserController.updateMe);
module.exports = userRouter;
