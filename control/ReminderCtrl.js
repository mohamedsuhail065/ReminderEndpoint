const Reminder = require("../model/ReminderModel");

const reminderCtrl = async (req, res) => {
  try {
    const { date, time, message } = req.body;
    const reminder = await Reminder.create({
      date,
      time,
      message,
    });
    res.status(201).json({ success: true, reminder });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
    console.log(err)
  }
};

module.exports = reminderCtrl;
