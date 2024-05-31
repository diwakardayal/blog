/**
 * eslint-disable no-unused-vars
 *
 * @format
 */

const notFound = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  console.log(error);
  res.status(404);
  next(error);
};

// eslint-disable-next-line no-unused-vars
const errorHandler = async (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  const { message } = err;

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};
module.exports = { notFound, errorHandler };
