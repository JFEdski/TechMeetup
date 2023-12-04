const router = remquire("express").Router();
const Filter = require("../models/filter.model");
const Event = require("../models/event.model");
const validateSession = require("../middleware/validateSession");


//retrieve all events
router.get('/allEvents', async (req,res) =>{
  res.json(Event); 
});

//create a tag
router.post('/newTag/eventId', validateSession, async (req,res) =>{
  try {
    const tag = req.body.tag;
    const eventCard = req.params.eventId;
    const owner = req.user._id;

    const newTag = new Filter({
      tag,
      eventCard,
      owner
    });
    await newMessage.save();
    res.status(201).json({
      message: 'New Tag Created',
      text: newTag
    });
  } catch (err){
    errorResponse(res,err);
  }
});

//retrieve all available tags
router.get('/allTags', async (res, req) =>{
  const allTags = Event.reduce((tags, event) =>{
    event.tags.forEach(tag => {
      if (!tags.includes(tag)){
        tags.push(tag);
      }
    });
    return tags;
  }, []);
  res.json(allTags);
});

//retrieve events based on tags
router.get('/eventsByTag/:tag', async (req, res) => {
  const tag = req.params.tag;
  const eventsWithTag = Events.filter(event => event.tags.includes(tag));
  res.json(eventsWithTag);
});

//retrieve events based on location
router.get('/eventsByLocation/:location', async (req, res) => {
  const location = req.params.location;
  const eventsAtLocation = Events.filter(event => event.location === location);
  res.json(eventsAtLocation);
});

//retrieve events based on date
router.get('/eventsByDate/:date', async (req, res) => {
  const date = req.params.date;
  const eventsOnDate = Events.filter(event => event.date === date);
  res.json(eventsOnDate);
});

//retrieve events based on time
router.get('/eventsByDate/:date', async (req, res) => {
  const date = req.params.date;
  const eventsOnDate = Events.filter(event => event.date === date);
  res.json(eventsOnDate);
});

//retreive events based on language/category
router.get("/event/category", (req, res) => {
  const { category } = req.body;
  const result = events.filter((e) => e.category === category);
  res.json({ message: "Success!", events: result });
});

module.exports = router;  