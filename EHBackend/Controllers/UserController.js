const UserModel = require("../Models/UserModel");

exports.signUpUser = async (req, res, next) => {
  const userData = await UserModel.create(req.body);
  console.log(userData);
  res.status(200).json({
    status: "success",
    data: userData,
  });
};
