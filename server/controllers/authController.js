const User = require("../models/userModel");

exports.register = async (req, res, next) => {
  const { name, email, password, role, profileImg, phone, slug } = req.body;

  // Create user
  const user = await User.create({
    name,
    email,
    password,
    role,
    profileImg,
    phone,
    slug,
  });

  //http://localhost:5000/api/auth/register

  // const token = user.getSignedJwtToken();

  // res.status(200).json({
  //   success: true,
  // });
  sendTokenResponse(user, 200, res);
};
exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  // Validate emil & password
  if (!email || !password) {
    return res.status(400, "Please provide an email and password");
  }
  // Check for user
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return res.status(401, "Invalid credentials");
  }
  // Check if password matches
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return res.status(401, "Invalid credentials");
  }
  // const token = user.getSignedJwtToken();
  // res.status(200).json({
  //   success: true,
  // });
  sendTokenResponse(user, 200, res);
};
const sendTokenResponse = (user, statusCode, res) => {
  // Create token
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  // if (process.env.NODE_ENV === "production") {
  //   options.secure = true;
  // }

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    token,
  });
};
