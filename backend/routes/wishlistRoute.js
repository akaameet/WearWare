const express = require("express");
const router = express.Router();
const Wishlist = require("../models/wishList");
const Product = require("../models/Product");
const { protect } = require("../middleware/authMiddleware");

/**
 * @route   GET /api/wishlist
 * @desc    Get user wishlist
 * @access  Private
 */
router.get("/", protect, async (req, res) => {
  const wishlist = await Wishlist.findOne({ userId: req.user._id });
  res.json(wishlist?.wishlist || []);
});

/**
 * @route   POST /api/wishlist
 * @desc    Add product to wishlist
 * @access  Private
 */
router.post("/", protect, async (req, res) => {
  const { productId } = req.body;

  const product = await Product.findById(productId);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  let wishlist = await Wishlist.findOne({ userId: req.user._id });

  const item = {
    productId,
    productSnapshot: {
      name: product.name,
      price: product.price,
      image: product.images[0],
    },
  };

  if (!wishlist) {
    wishlist = await Wishlist.create({
      userId: req.user._id,
      wishlist: [item],
    });
  } else {
    const exists = wishlist.wishlist.find(
      (i) => i.productId.toString() === productId
    );
    if (exists) {
      return res.status(400).json({ message: "Already in wishlist" });
    }
    wishlist.wishlist.push(item);
    await wishlist.save();
  }

  res.status(201).json(wishlist.wishlist);
});

/**
 * @route   DELETE /api/wishlist/:productId
 * @desc    Remove from wishlist
 * @access  Private
 */
router.delete("/:productId", protect, async (req, res) => {
  const wishlist = await Wishlist.findOne({ userId: req.user._id });

  if (!wishlist) return res.json([]);

  wishlist.wishlist = wishlist.wishlist.filter(
    (item) => item.productId.toString() !== req.params.productId
  );

  await wishlist.save();
  res.json(wishlist.wishlist);
});

module.exports = router;
