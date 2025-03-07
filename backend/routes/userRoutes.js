// routes/userRoutes.js (Updated)

const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/userController");
const protect = require("../middleware/authMiddleware");

// Route to register a new user
router.post("/register", registerUser);

// Route to log in an existing user
router.post("/login", loginUser);

// Protected route example
router.get("/protected", protect, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

module.exports = router;
