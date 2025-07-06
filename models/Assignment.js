const mongoose = require("mongoose");

const AssignmentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true},
    description: { type: String, required: true},
    duedate: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Assignment", AssignmentSchema);