const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./utils/database");
// const Product = require("./models/product");
const productRouter = require("./Router/product");
app.use(cors());
app.use(bodyParser.json({ extended: false }));
app.use("/product", productRouter);
sequelize
  .sync()
  .then(() => {
    app.listen(4000);
  })
  .catch((err) => {
    console.log(err);
  });
