const Sequelize = require("sequelize");
const sequelize = new Sequelize("market", "root", "ritika91@", {
  host: "localhost",
  dialect: "mysql",
});
module.exports = sequelize;
