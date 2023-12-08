const router = require("express").Router();
const User = require("../models/users.model");
const Event = require("../models/event.model");
const validateSession = require("../middleware/validateSession");
const  reminderEmail = require("../controllers/emailReminder");
console.log(reminderEmail)



function errorResponse(res, err) {
  res.status(500).json({ ERROR: err.message });
}
// Added validate session
router.post("/event", validateSession, async (req, res) => {
  // console.log('hello/event')
  try {

    const ownerId = req.user._id;
    
    const eventCard = {
      name: req.body.name,
      date: req.body.date,
      description: req.body.description,
      owner: ownerId,
    };
    
    const event = new Event(eventCard);
    const newEvent = await event.save();
    console.log(newEvent);
    res.status(200).json({
      message: "New Event Created!",
      event: newEvent,
    });
  } catch (err) {
    errorResponse(res, err);
  }
});

    //make register endpoint, take in user and event ID
router.patch ("/event/register/:id", validateSession, async (req, res) => {

  try {
    
    const user = req.user._id;
    
    //attendeeArray.push = myEvent.attendee


    const event = req.params.id
    const myEvent = await Event.findById({_id:event})
    
    let attendeeArray = myEvent.attendee //.push(user) //save- update event, 
    console.log(attendeeArray)
    if (attendeeArray.includes(user) ){
      console.log('already registered')
    
    } else {
      attendeeArray.push(user)
      const reminderEmail = cron.schedule ("* * * * *", () => {
        console.log("runs every min");
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "andyus.testing@gmail.com", //put email here
            pass: "$2b$12$A3BfOfhdS2v4vGYueNtGFe/iFbqkAji/B5AtoXoqb2NMglKbWsK/K", // password here
          },
        });
      resend.emails.send({
          from: "andyus.testing@gmail.com", //sender addy
          to: "abc@.com", // receiver addy
          subject: "Tech Event Reminder",
          html: "<p> Your event is in 5 days</p>", //plain twxt body
        });
      });
      reminderEmail.start() 
    } 
    

    


    //dont douubke user id

    myEvent.save()

    // console.log('myEvent',myEvent);
    // console.log(myEvent.attendee) 
    
  } catch (err) {
    errorResponse(res,err);
  }

}) 
//

module.exports = router;
//res . status. res.json 