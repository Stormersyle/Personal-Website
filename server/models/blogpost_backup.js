const mongoose = require("mongoose");
const BlogPost = new mongoose.Schema({
  title: String,
  body: String,
  timestamp: { type: Number, default: Date.now },
});
module.exports = mongoose.model("blogpost_backups", BlogPost);
