require("dotenv").config();

const express = require("express");

const app = express();

const mongoose = require("mongoose");

const cors = require("cors");

const user = require("./controllers/user.controllers");

const { PORT, MONGO } = process.env;

mongoose.connect(`${MONGO}/TechMeetup`);

const db = mongoose.connection;

db.once("open", () => console.log(`Connected to: ${MONGO}`));

app.use(express.json());
app.use(cors());
app.use("/user", user);

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
