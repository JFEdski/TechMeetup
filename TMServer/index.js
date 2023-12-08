require("dotenv").config();

const express = require("express");

const app = express();

const mongoose = require("mongoose");

const cors = require("cors");

const user = require("./controllers/user.controller");
const events = require("./controllers/event.controller");

const nodemailer = require("nodemailer"); // see if needed???

const { PORT, MONGO } = process.env;


app.use(express.json());
app.use(cors());

app.use("/user", user);
app.use("/events", events);


mongoose.connect(`${MONGO}/TechMeetup`);

const db = mongoose.connection;
db.once("open", () => console.log(`Connected to: ${MONGO}`));

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
