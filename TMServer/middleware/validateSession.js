const jwt = require("jsonwebtoken");
const User = require("../models/users.model");
const Event = require("../models/event.model");

async function validateSession(req, res, next) {
  try {
    const token = req.headers.authorization;

    const decoded = await jwt.verify(token, process.env.JWT);

    const user = await User.findById(decoded.id);

    const event = await Event.findById(decoded.eventId);

    if (!user) throw new Error("User Not Found");
    req.user = user;

    // if (!event) throw new Error("Event Not Found");
    // req.event = event;

    return next();
  } catch (err) {
    res.status(403).json({ message: err.message });
  }
}

module.exports = validateSession;
