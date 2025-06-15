const router = require("express").Router();
const User = require("../models/User");
// const CryptoJS = require("crypto-js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// import bcrypt from "bcryptjs";

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    department: req.body.department,
    level: req.body.level,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
  });

  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ error: "email already exists!" });
    }
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    // check if username exists
    if (!user) {
      return res.status(401).json({ error: "email doesn't exist!" });
    }

    // check if password is correct

    if (bcrypt.compareSync(req.body.password, user.password) == false) {
      return res.status(401).json("Wrong password!");
    }

    // const accessToken = jwt.sign(
    //   {
    //     id: user._id,
    //     isAdmin: user.isAdmin,
    //   },
    //   process.env.JWT_SEC,
    //   {expiresIn:"2d"}
    // );

    //  const { ...others } = user._doc;

    res.status(200).json("logged in successfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
