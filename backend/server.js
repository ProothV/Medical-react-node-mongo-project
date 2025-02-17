require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Sample Route
app.get("/", (req, res) => {
  res.send("Welcome to Medicine Delivery API!");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const medicineRoutes = require("./routes/medicineRoutes");
app.use("/api/medicines", medicineRoutes);

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

