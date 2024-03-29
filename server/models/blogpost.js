const mongoose = require("mongoose");
const BlogPost = new mongoose.Schema({
  title: String,
  body: String,
  timestamp: { type: Date, default: Date.now },
});
