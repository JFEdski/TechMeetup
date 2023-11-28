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

module.exports = router;  