const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    course: { type: Array, required: true},
  },
  { timestamps: true }
);
module.exports = mongoose.model("Users", UserSchema);