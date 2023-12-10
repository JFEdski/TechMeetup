const cron = require("node-cron");
const nodemailer = require("nodemailer");
// const app = epxress ()

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
  const mailOptions = ({
    from: "andyus.testing@gmail.com", //sender addy
    to: attendee.email, // receiver addy
    subject: "Tech Event Reminder",
    html: "<p> Your event is in 5 days</p>", //plain twxt body
  });

  // cron.schedule('* * * * *', function () {
  //   console.log('---------------------');
  //   console.log('Running Cron Process');
  //   transporter.sendMail(mailOptions, (error, info) => {
  //     if (error) console.log(error);
  //     else console.log('Email sent: ' + info.response);
  //   });
  // });
});

// user id (validates session/ event id (in req body or parameter path vaiable /register/:event)
// table with both user and event id
// register model /
// start method for cron
// function in event controller

module.exports = reminderEmail;