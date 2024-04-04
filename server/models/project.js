const mongoose = require("mongoose");
const Project = new mongoose.Schema({
  name: String,
  description: String,
  website_link: String,
  github_link: String,
  image_link: String,
  starred: Boolean, //true>false
  priority: Number, //higher priority comes first
  timestamp: { type: Number, default: Date.now },
});
module.exports = mongoose.model("projects", Project);
