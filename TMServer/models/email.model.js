const mongoose = require("mongoose");

const EmailSchema = new mongoose.Schema({
  // Define your email schema fields here
  // For example:
  recipient: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Email", EmailSchema);
