const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const Product = sequelize.define(
  "product",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    price: Sequelize.INTEGER,
    quantity: { type: Sequelize.INTEGER, allowNull: false },
  },
  {
    timestamps: false,
  }
);
module.exports = Product;
