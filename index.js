const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const timetableRoute = require("./routes/timetable");
const assignmentRoute = require("./routes/assignment");
const announcementRoute = require("./routes/announcement");
const examRoute = require("./routes/exams");
const testRoute = require("./routes/tests");


const cors = require("cors");

dotenv.config();

const conect = mongoose.connect(process.env.MONGO_URL);

conect
  .then(() => {
    console.log("success");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api/timetable", timetableRoute);
app.use("/api/assignment", assignmentRoute);
app.use("/api/announcement", announcementRoute);
app.use("/api/exams", examRoute);
app.use("/api/tests", testRoute);


app.listen(process.env.PORT || 5000, () => {
  console.log("server running");
});
