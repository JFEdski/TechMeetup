// const express = require ("express");
// const nodemailer = require("nodemailer");
// const router = express.Router();

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   // host: "smtp.resend.com",
//   // port: 465,
//   // secure: true,
//   auth: {
//     // TODO: replace `user` and `pass` values from <https://forwardemail.net>
//     user: "resend",
//     pass: "re_HxT5E98k_Ya4yt7qWjZcLjb2Z5pQccnNY",
//   },
// });

// // async..await is not allowed in global scope, must use a wrapper


// // make sign up end point.


// router.post("/:id async function main() {
//   // send mail with defined transport object
//   const info = await transporter.sendMail({
//     from: '"Fred Foo 👻" <foo@example.com>', // sender address
//     to: "bar@example.com, baz@example.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

// }

// main().catch(console.error);

// module.exports = router;


const Agenda = require('agenda');
const MongoClient = require('mongodb').MongoClient;

const connectionString = 'mongodb://localhost/agenda';

(async function() {
  const client = await MongoClient.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
  const agenda = new Agenda({ mongo: client.db('agenda') });
  // Define tasks
  agenda.define('send email', async (job, done) => {
    console.log('Sending email...');
    done();
  });
  // Schedule tasks
  await agenda.start();
  agenda.every('1 hour', 'send email');
})();



// Dateobject in JS to find # days before s