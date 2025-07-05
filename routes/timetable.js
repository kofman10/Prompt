const Timetable = require("../models/Timetable");
// const {
//   verifyToken,
//   verifyTokenAndAuthorization,
//   verifyTokenAndAdmin,
// } = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/",  async (req, res) => {
  const newTimetable = new Timetable({
    day: req.body.day,
    time: req.body.time,
    course: req.body.course,
    venue: req.body.venue, 
  });

  try {
    const savedTimetable = await newTimetable.save();
    res.status(200).json(savedTimetable);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;