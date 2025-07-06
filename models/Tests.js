const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema(
  {
    day: { type: String, required: true},
    time: { type: String, required: true},
    course: { type: String, required: true },
    venue: { type: String, required: true},
   },
   { timestamps: true }
);
module.exports = mongoose.model("Test", TestSchema);