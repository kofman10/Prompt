const Course = require("../models/Course");
// const {
//   verifyToken,
//   verifyTokenAndAuthorization,
//   verifyTokenAndAdmin,
// } = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/",  async (req, res) => {
  const newCourse = new Course(req.body);

  try {
    const savedCourse = await newCourse.save();
    res.status(200).json(savedCourse);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL Course ENTRIES

router.get("/", async (req, res) => {
  try {
    const Courses = await Course.find(); 
    res.status(200).json(Courses); 
  } catch (err) {
    res.status(500).json(err); 
  }
});


module.exports = router;