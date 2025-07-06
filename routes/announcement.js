const Announcement = require("../models/Announcement");
// const {
//   verifyToken,
//   verifyTokenAndAuthorization,
//   verifyTokenAndAdmin,
// } = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/",  async (req, res) => {
  const newAnnouncement = new Announcement({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedAnnouncement = await newAnnouncement.save();
    res.status(200).json(savedAnnouncement);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL Announcement ENTRIES

router.get("/", async (req, res) => {
  try {
    const Announcements = await Announcement.find(); 
    res.status(200).json(Announcements); 
  } catch (err) {
    res.status(500).json(err); 
  }
});


module.exports = router;