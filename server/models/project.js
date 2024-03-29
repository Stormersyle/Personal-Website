const mongoose = require("mongoose");
const Project = new mongoose.Schema({
  name: String,
  description: String,
  screenshot_link: String,
  website_link: String,
  github_link: String,
  starred: Boolean, //true>false
  priority: Number, //higher priority comes first
  timestamp: { type: Date, default: Date.now },
});
