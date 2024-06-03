/** @format */

require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
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

const dirname = path.resolve();
app.use(express.static(path.join(dirname, "frontend", "/dist")));
app.get("*", (req, res) => {
  app.use(express.static(path.resolve(dirname, "frontend", "dist")));
  res.sendFile(path.resolve(dirname, "frontend", "dist", "index.html"));
});

app.use(notFound);
app.use(errorHandler);
