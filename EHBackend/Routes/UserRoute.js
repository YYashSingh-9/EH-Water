const express = require("express");
const UserController = require("../Controllers/UserController");
const userRouter = express.Router();

userRouter.route("/").post(UserController.signUpUser);

module.exports = userRouter;
