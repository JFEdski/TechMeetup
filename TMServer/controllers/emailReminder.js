const cron = require("node-cron");
const nodemailer = require("nodemailer");
//const app = epxress ()

//email schedule code here
// app.listen(8000)

const reminderEmail = cron.schedule("* * * * *", () => {
  console.log("runs every min");
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "andyus.testing@gmail.com", //put email here
      pass: "$2b$12$A3BfOfhdS2v4vGYueNtGFe/iFbqkAji/B5AtoXoqb2NMglKbWsK/K", // password here
    },
  });
  const mailOptions = resend.emails.send({
    from: "andyus.testing@gmail.com", //sender addy
    to: "abc@.com", // receiver addy
    subject: "Tech Event Reminder",
    html: "<p> Your event is in 5 days</p>", //plain twxt body
  });
});

// user id (validates session/ event id (in req body or parameter path vaiable /register/:event)
// table with both user and event id
// register model /
// start method for cron
// function in event controller

module.exports = reminderEmail;
