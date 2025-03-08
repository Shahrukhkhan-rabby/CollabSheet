const Activity = require("../models/activityModel");

// Log user activity
const logActivity = async (req, res) => {
  try {
    const { action } = req.body;

    const newActivity = new Activity({
      user: req.user._id,
      action,
    });

    await newActivity.save();
    res.status(201).json({ message: "Activity logged successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get user activities (Admin only)
const getUserActivity = async (req, res) => {
  try {
    const activities = await Activity.find().populate("user", "name email");
    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { logActivity, getUserActivity };
