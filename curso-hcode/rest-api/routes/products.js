const express = require("express");
const router = express.Router();
const Products = require("../models/products");

router.get("/", async (req, res) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", getProduct, (req, res) => {});

router.post("/", async (req, res) => {
  const products = new Products({
    description: req.body.description,
    price: req.body.price,
    createDate: req.body.createDate,
  });

  try {
    const newProduct = await products.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.patch("/:id", getProduct, async (req, res) => {
  if (req.body.description) {
    res.products.description = req.body.description;
  }
  if (req.body.price) {
    res.products.price = req.body.price;
  }
  const updateProduct = await res.products.save();
  res.json(updateProduct);
  try {
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", getProduct, async (req, res) => {
  try {
    await res.products.remove();
    res.json({ message: "Product was deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

async function getProduct(req, res, next) {
  try {
    const products = await Products.findById(req.params.id);
    if (products === null) {
      return res.status(404).json({ message: "Product not found!" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.products = products;
  next();
}

module.exports = router;
