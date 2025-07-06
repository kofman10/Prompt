const Exam = require("../models/Exams");
// const {
//   verifyToken,
//   verifyTokenAndAuthorization,
//   verifyTokenAndAdmin,
// } = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/",  async (req, res) => {
  const newExam = new Exam({
    day: req.body.day,
    time: req.body.time,
    course: req.body.course,
    venue: req.body.venue, 
  });

  try {
    const savedExam = await newExam.save();
    res.status(200).json(savedExam);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL Exam ENTRIES

router.get("/", async (req, res) => {
  try {
    const Exams = await Exam.find(); 
    res.status(200).json(Exams); 
  } catch (err) {
    res.status(500).json(err); 
  }
});


module.exports = router;