const Assignment = require("../models/Assignment");
// const {
//   verifyToken,
//   verifyTokenAndAuthorization,
//   verifyTokenAndAdmin,
// } = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/",  async (req, res) => {
  const newAssignment = new Assignment({
    title: req.body.title,
    description: req.body.description,
    duedate: req.body.duedate,
  });

  try {
    const savedAssignment = await newAssignment.save();
    res.status(200).json(savedAssignment);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL Assignment ENTRIES

router.get("/", async (req, res) => {
  try {
    const Assignments = await Assignment.find(); 
    res.status(200).json(Assignments); 
  } catch (err) {
    res.status(500).json(err); 
  }
});


module.exports = router;