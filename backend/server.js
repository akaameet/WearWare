const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoute");
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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
