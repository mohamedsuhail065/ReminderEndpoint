const mongoose = require("mongoose");
const ReminderSchema = new mongoose.Schema(
  {
    date: { type: String, required: true },
    time: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);
const Reminder =new mongoose.model("reminder-tbl",ReminderSchema);

module.exports = Reminder;
