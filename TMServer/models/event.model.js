const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  name: String,
  date: {
    type: Date,
    required: true,
  },
  description: String,
  owner: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Event", EventSchema);
