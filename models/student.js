const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  email: String,
  paid: Boolean,
  wallet: String,
  dateTime: Date,
});

module.exports = mongoose.model("Student", studentSchema);
