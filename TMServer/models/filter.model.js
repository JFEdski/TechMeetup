const mongoose = require('mongoose');

const FilterSchema = new mongoose.Schema({
  tag: {
    type: String,
    required: true,
  },
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event', //references the Event model
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', //references the User model
    required: true,
  },
});
const Filter = mongoose.model('Filter', FilterSchema);
module.exports = Filter;