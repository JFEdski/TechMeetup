const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Duplicate email will send back an error
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
   // enum: ["user", "admin"]
  }
});

module.exports = mongoose.model("User", UserSchema);
