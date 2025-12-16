const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const { product } = require("../middleware/authMiddleware");

//@route POST /api/products
//@desc Create a new product
//@ access Private/Admin
router.post("/", product, async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      discountPrice,
      stock,
      sku,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      weight,
    } = req.body;
    const product = new Product({
      name,
      description,
      price,
      discountPrice,
      stock,
      sku,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      weight,
      user: req.user._id, //refer to admin creating the product
    });
    const createProduct = await product.save();
    res.status(201).json(createProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});
