const express = require("express");
const reminderCtrl = require("../control/ReminderCtrl");
const router = express.Router();
router.route("/").post(reminderCtrl);

module.exports = router;
