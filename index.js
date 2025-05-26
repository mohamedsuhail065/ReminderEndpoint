const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/ReminderRtr");

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/api/reminders", router);
mongoose
  .connect("mongodb://localhost:27017/reminders", {})
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((err) => console.error(err));
