const express = require("express");
const Product = require("../models/Product");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();
// @route GET /api/admin/products
// @desc Get all products
// @access Private/Admin
router.get("/", protect, admin, async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

router.put("/:id", protect, admin, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.name = req.body.name || product.name;
    product.description = req.body.description || product.description;
    product.price = req.body.price || product.price;
    product.stock = req.body.stock || product.stock;
    product.brand = req.body.brand || product.brand;
    product.category = req.body.category || product.category;
    product.sizes = req.body.sizes || product.sizes;
    product.colors = req.body.colors || product.colors;
    product.images = req.body.images || product.images;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Update failed" });
  }
});

module.exports = router;
