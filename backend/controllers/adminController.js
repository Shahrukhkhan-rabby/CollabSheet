const Activity = require("../models/activityModel");

const getUserActivity = async (req, res) => {
  const activities = await Activity.find({}).populate("user", "name email");
  res.json(activities);
};

module.exports = { getUserActivity };
