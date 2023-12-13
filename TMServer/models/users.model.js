const mongoose = require("mongoose");
// import { Schema } from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: false,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: false, // Duplicate email will send back an error
  },
  password: {
    type: String,
    required: true,
  },
  // role: {
  //   type: String,
  //   default: "user",
  //   // enum: ["user", "admin"]
  // },
  // events: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Event'
  // }]
});

module.exports = mongoose.model("User", UserSchema);
