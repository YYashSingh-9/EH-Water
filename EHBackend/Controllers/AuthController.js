const UserModel = require("../Models/UserModel");
const AppError = require("../Utils/AppError");
const CatchAsync = require("../Utils/CatchAsync");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const signToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_COOKIE_EXPIRES_IN,
  });
  return token;
};
const createAndSendCookie = (user, statusCode, res) => {
  const token = signToken(user.id);
  const cookieOptions = {
    httpOnly: true,
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    sameSite: "none",
  };
  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;
  res.cookie("jwt", token, cookieOptions);
  user.password = undefined;
  res.status(statusCode).json({
    status: "success",
    token,
    data: user,
  });
};

exports.signUpUser = CatchAsync(async (req, res, next) => {
  const userData = await UserModel.create(req.body);
  console.log(userData);
  if (!userData) {
    return next(new AppError("Failed to create user", 400));
  }
  createAndSendCookie(userData, 200, res);
});

exports.loginUser = CatchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError("Email or password is missing. Please re-enter"));
  }
  const user = await UserModel.findOne({ email }).select("+password");
  console.log(user);
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Password sent is incorrect , try again.", 400));
  }
  createAndSendCookie(user, 200, res);
});

exports.protect = CatchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
    console.log(token);
  }
  //2.If no token then return.
  if (!token) {
    return next(new appError("Can't identify token , try again.", 400));
  }
  //3.Verifying token and extracting decoded object.
  // const decoded = jwt.verify(token, process.env.JWT_SECRET);✅
  const decodedToken = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET
  );
  //4.Finding user with id from decodedToken object.
  const current_user = await User.findById(decodedToken.id);
  //5.Forwarding user to req so that secure routes can have access to user property
  req.user = current_user;
  next();
});

exports.updateMyPassword = CatchAsync(async (req, res, next) => {
  if (!req.body.password || !req.body.passwordCurrent) {
    return next(
      new AppError("Missing field either password or current password"),
      400
    );
  }
  const user = await UserModel.findById(req.body.id).select("+password");
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Password sent is incorrect , try again.", 400));
  }
  user.password = password;
  user.passwordConfirm = password;
  await UserModel.save();

  createAndSendCookie(user, 200, res);
});
