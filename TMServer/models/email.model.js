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


// from: '"Fred Foo 👻" <foo@example.com>', // sender address
// to: "bar@example.com, baz@example.com", // list of receivers
// subject: "Hello ✔", // Subject line
// text: "Hello world?", // plain text body
// html: "<b>Hello world?</b>", // html body
// });