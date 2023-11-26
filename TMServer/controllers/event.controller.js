const router = require("express").Router();
const User = require("../models/users.model");
const Event = require("../models/event.model");
const validateSession = require("../middleware/validateSession");

function errorResponse(res, err) {
  res.status(500).json({ ERROR: err.message });
}

router.post("/event", async (req, res) => {
  try {
    const eventCard = {
      name: req.body.name,
      date: req.body.date,
      description: req.body.description,
      //owner: req.user._id,
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

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let owner = req.user.id;

    const deletedEvent = await Event.deleteOne({ _id: id, owner });
    if (!deletedEvent.deletedCount) {
      throw new Error("Event does not exist");
    }

    res.status(200).json({
      message: "Event has been deleted",
      deletedEvent,
    });
  } catch (error) {
    errorResponse(res, error);
  }
});

module.exports = router;
