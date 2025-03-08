const express = require("express");
const { protect, adminOnly } = require("../middleware/authMiddleware");
const { getAllUsers, deleteUser } = require("../controllers/adminController");
const { getUserActivity } = require("../controllers/activityController"); // Import activity controller


const router = express.Router();

// Protect all admin routes with `protect` and `adminOnly`
router.get("/users", protect, adminOnly, getAllUsers);
router.delete("/user/:id", protect, adminOnly, deleteUser);

// ✅ New Route: Fetch user activity (Admins only)
router.get("/user-activity", protect, adminOnly, getUserActivity);

module.exports = router;
