// Importing required packages
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defining the VitalSign schema
const VitalSignSchema = new Schema({
  bodyTemperature: {
    type: String,
    required: [true, "Please add bodyTemperature"],
  },
  heartRate: {
    type: String
  },
  bloodPressure: {
    type: String
  },
  respiratoryRate: {
    type: String
  },
  weight: {
    type: String
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
}, {
  timestamps: true, // Adding createdAt and updatedAt timestamps
});

// Exporting the VitalSign model
module.exports = mongoose.model('VitalSign', VitalSignSchema);