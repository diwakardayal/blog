/** @format */

const express = require("express");

const router = express.Router();
const userRouter = require("./userRouter");
const blogRouter = require("./blogRouter");

router.use("/api/user", userRouter);
router.use("/api/blog", blogRouter);

module.exports = router;
