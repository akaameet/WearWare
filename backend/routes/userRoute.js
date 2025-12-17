const express = require("express");
const router = express.Router(); //route instance
const User = require("../models/user");
const { protect } = require("../middleware/authMiddleware");
const jwt = require("jsonwebtoken");
const { model } = require("mongoose");

//@route  POST /api/users/register
//@desc   Register a new user
//@access Public
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({ name, email, password });
    await user.save();

    // Generate JWT payload
    const payload = {
      user: {
        id: user._id,
        role: user.role,
      },
    };

    //Sign and return JWT
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "24h" },
      (err, token) => {
        if (err) throw err;
        //send user and token in response
        res.status(201).json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token,
        });
      }
    );
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

//@route  POST /api/users/login
//@desc   Authenticate user
//@access Public
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    //Generate JWT payload
    const payload = {
      user: {
        id: user._id,
        role: user.role,
      },
    };
    //Sign and return JWT
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "24h" },
      (err, token) => {
        if (err) throw err;
        //send user and token in response
        res.status(200).json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token,
        });
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

//@route  GET /api/users/profile
//@desc   Get loggged in user profile
//@access Private
router.get("/profile", protect, async (req, res) => {
  res.json(req.user);
});

module.exports = router;
