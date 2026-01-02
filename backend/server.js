const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoute");
const productRoutes = require("./routes/productRoute");
const cartRoutes = require("./routes/cartRoute");
const checkoutRoutes = require("./routes/checkoutRoute");
const orderRoutes = require("./routes/orderRoute");
const uploadRoutes = require("./routes/uploadRoute");
const subscribeRoutes = require("./routes/subscribeRoute");
const adminRoutes = require("./routes/adminRoute");
const productAdminRoutes = require("./routes/productAdminRoute");
const adminOrderRoutes = require("./routes/adminOrderRoute");
const profileRoutes = require("./routes/profileRoute");
const wishlistRoutes = require("./routes/wishlistRoute");
dotenv.config();

const app = express(); //initialize express app
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;
connectDB();

app.get("/", (req, res) => {
  res.send("Wearware Backend Server is running");
});

//ApI routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/checkout", checkoutRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/", subscribeRoutes);
app.use("/api/admin/users", adminRoutes);
app.use("/api/admin/products", productAdminRoutes);
app.use("/api/admin/orders", adminOrderRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/wishlist", wishlistRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
