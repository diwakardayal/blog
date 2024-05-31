/** @format */
const sequelize = require("./config");

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    // Sync models
    await sequelize.sync();
    console.log("Models synchronized successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
