const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { protect } = require("../middleware/authMiddleware");

// GET profile
router.get("/", protect, async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

// UPDATE profile
router.put("/", protect, async (req, res) => {
  const user = await User.findById(req.user._id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.name = req.body.name || user.name;
  user.phone = req.body.phone || user.phone;
  user.address = req.body.address || user.address;

  const updatedUser = await user.save();
  res.json(updatedUser);
});

module.exports = router;
