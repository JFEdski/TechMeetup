const router = require("express").Router();
const User = require("../models/users.model");
const Event = require("../models/event.model");
const validateSession = require("../middleware/validateSession");

function errorResponse(res, err) {
  res.status(500).json({ ERROR: err.message });
}
// Added validate session
router.post("/event", validateSession, async (req, res) => {
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
    res.status(200).json({
      message: "New Event Created!",
      event: newEvent,
    });
  } catch (err) {
    errorResponse(res, err);
  }
});

module.exports = router;
