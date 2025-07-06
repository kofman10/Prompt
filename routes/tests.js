const Test = require("../models/Tests");
// const {
//   verifyToken,
//   verifyTokenAndAuthorization,
//   verifyTokenAndAdmin,
// } = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/",  async (req, res) => {
  const newTest = new Test({
    day: req.body.day,
    time: req.body.time,
    course: req.body.course,
    venue: req.body.venue, 
  });

  try {
    const savedTest = await newTest.save();
    res.status(200).json(savedTest);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL Test ENTRIES

router.get("/", async (req, res) => {
  try {
    const Tests = await Test.find(); 
    res.status(200).json(Tests); 
  } catch (err) {
    res.status(500).json(err); 
  }
});


module.exports = router;