const Product = require("../models/product");

exports.create = async (req, res) => {
  try {
    const name = req.body.name;
    const description = req.body.desp;
    const price = req.body.price;
    const quantity = req.body.quan;
    if (!name || !description || !price || !quantity) {
      res.status(400).json({
        error: "send all required field",
      });
    }
    const data = await Product.create({
      name: name,
      description: description,
      price: price,
      quantity: quantity,
    });
    res.status(201).json({ data: data });
  } catch (err) {
    if (err && err.error && err.error[0]) {
      res.status(500).json({ Error: err });
    } else {
      {
        res.status(500).json({ Error: "someThing went wrong" });
      }
    }
  }
};

exports.getAll = async (req, res) => {
  try {
    const data = await Product.findAll();
    res.status(200).json({ data: data });
  } catch (err) {
    res.status(501).json({ Error: err.errors[0] });
  }
};

exports.editProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const updateData = req.body;
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ error: "product not found" });
    }
    await product.update(updateData);
    res.status(200).json({ data: "update successfully" });
  } catch (err) {
    res.status(501).json({ Error: err.errors[0] });
  }
};
