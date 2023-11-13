const express = require("express");
const Router = express.Router();
const productController = require("../controllers/product");
Router.post("/create", productController.create);
Router.get("/readAll", productController.getAll);
Router.put("/update/:id", productController.editProduct);
module.exports = Router;
