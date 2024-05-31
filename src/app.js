/** @format */

require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
require("./db/connection");
const { notFound, errorHandler } = require("./middleware/errorMiddlware");
const routerIndex = require("./router/routerIndex");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(routerIndex);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});

app.use(notFound);
app.use(errorHandler);
