const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: [
      "JavaScript",
      "Python",
      "Java",
      "C/C#/C++",
      "Ruby",
      "SQL",
      "PHP",
      "HTML/CSS"
    ]
  },
  location: {
    type: String,
    required: false,
  },
  attendee: {
    type: []
  },

  // Uncommented the owner because we need this to create an event by an owner who is the admin "role".
  owner: {
    // type: String,
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'owner'
  },
});

module.exports = mongoose.model("Event", EventSchema);
