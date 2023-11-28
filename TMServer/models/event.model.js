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

  // Uncommented the owner because we need this to can create a event by a owner who is the admin "role".
  owner: {
    // type: String,
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: true
  },
});

module.exports = mongoose.model("Event", EventSchema);
