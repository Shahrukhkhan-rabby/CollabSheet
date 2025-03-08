require("dotenv").config(); // Ensure this is the first line
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db"); // MongoDB connection
const userRoutes = require("./routes/userRoutes"); // Import user routes
const activityRoutes = require("./routes/activityRoutes"); // Activity routes


const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/activity", activityRoutes); // Register activity routes


// Base route to check if the server is working
app.get("/", (req, res) => {
  res.send("Server is up and running");
});

// Starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
