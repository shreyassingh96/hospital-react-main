// Importing required modules
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defining EmergencyAlert schema
const EmergencyAlertSchema = new Schema({
  alertMessage: {
    type: String,
    required: [true, "Please add alert message"],
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

// Exporting EmergencyAlert model
module.exports = mongoose.model('EmergencyAlert', EmergencyAlertSchema);