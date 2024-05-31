/* eslint-disable no-underscore-dangle */
/**
 * eslint-disable no-underscore-dangle
 *
 * @format
 */

/** @format */

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("../middleware/asyncHandler");
const User = require("../db/models/user");

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });

// @desc Auth user
// @route POST /api/user/auth
// @access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please provide name,password");
  }

  const user = await User.findOne({ where: { email } });

  if (!user) {
    res.status(400);
    throw new Error("User doesnt exists");
  }

  const token = createToken(user._id);
  res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });

  res.status(200).json({
    id: user.id,
    name: user.name,
    email: user.email,
  });
});

// @desc Register user
// @route POST /api/user/
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, password, email } = req.body;

  if (!name || !password || !email) {
    res.status(400);
    throw new Error("Please provide name,password & email");
  }

  const userExists = await User.findOne({ where: { email } });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  const token = createToken(user._id);
  res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });

  if (user) {
    res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

module.exports = { authUser, registerUser };
