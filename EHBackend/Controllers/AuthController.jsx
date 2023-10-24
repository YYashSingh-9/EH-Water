const UserModel = require("../Models/UserModel");
const CatchAsync = require("../Utils/CatchAsync");

exports.signUpUser = CatchAsync(async () => {
  const userData = await UserModel.create(req.body);
  console.log(userData);
  res.status(200).json({
    status: "success",
    data: userData,
  });
});
