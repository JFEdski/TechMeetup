const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  //   owner: {
  //     type: String,
  //     required: true,
  //   },
});

module.exports = mongoose.model("Event", EventSchema);