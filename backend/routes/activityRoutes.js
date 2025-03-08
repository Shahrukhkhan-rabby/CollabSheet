const express = require("express");
const { protect, adminOnly } = require("../middleware/authMiddleware");
const {
  logActivity,
  getUserActivity,
} = require("../controllers/activityController");

const router = express.Router();

// Route to log activity (User)
router.post("/log", protect, logActivity);

// Route to get all user activities (Admin only)
router.get("/user-activity", protect, adminOnly, getUserActivity);


module.exports = router;
