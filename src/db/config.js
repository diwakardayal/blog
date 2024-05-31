/** @format */

const { Sequelize } = require("sequelize");

const { DB_USERNAME } = process.env;
const { DB_NAME } = process.env;
const { DB_PASSWORD } = process.env;
const { DB_HOST } = process.env;
const { DB_TYPE } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_TYPE,
});

module.exports = sequelize;
