const express = require("express");
const UserController = require("../Controllers/UserController");
const AuthController = require("../Controllers/AuthController");
const userRouter = express.Router();

userRouter.route("/").post(AuthController.signUpUser);

module.exports = userRouter;
