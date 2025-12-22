const mongoose = require("mongoose");
const Product = require("./models/Product");
const User = require("./models/user");
const Cart = reqyuire("./models/Cart.js");
const products = require("./data/products");
const dotenv = require("dotenv");
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI);

//Function to seed data
const seedData = async () => {
  try {
    //Clear existing data
    await Product.deleteMany();
    await User.deleteMany();
    await Cart.deletemany();
    console.log("Existing data cleared");

    //Create a default admin user
    const createdUser = new User({
      name: "Admin User",
      email: "admin@gmail.com ",
      password: "admin123",
      role: "admin",
    });

    //Assign the default user ID to each product
    const userID = createdUser._id;
    const sampleProducts = products.map((product) => {
      return { ...product, user: userID };
    });

    //Insert the admin user and products
    await Product.insertMany(sampleProducts);
    console.log("Data seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
};
seedData();
