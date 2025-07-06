const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema(
  {
    course: { type: String, required: true},
  },
  { timestamps: true }
);
module.exports = mongoose.model("Course", CourseSchema);