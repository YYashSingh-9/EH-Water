const UserModel = require("../Models/UserModel");
const AppError = require("../Utils/AppError");
const DefaultController = require("./DefaultController");
const CatchAsync = require("../Utils/CatchAsync");

// Helper function
const filterObj = (obj, ...allowedFields) => {
  console.log(obj, allowedFields);
  const newObject = {};
  Object.keys(obj).forEach((curr_el) => {
    if (allowedFields.includes(curr_el))
      return (newObject[curr_el] = obj[curr_el]);
  });
  return newObject;
};

exports.updateMe = CatchAsync(async (req, res, next) => {
  if (req.body.password || req.body.passwordConfirm) {
    return next(new AppError("Password fields are not allowed.", 400));
  }

  const filteredObj = filterObj(req.body, "name", "email");

  const user = await UserModel.findByIdAndUpdate(req.params.id, filteredObj, {
    new: true,
    runValidators: true,
  });
});
exports.getOneUser = DefaultController.DefaultGetOne(UserModel);
