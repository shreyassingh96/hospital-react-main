// Importing required modules
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defining schema for motivational tip
const MotivationalTipSchema = new Schema({
  message: {
    type: String,
    required: [true, "Please add any motivational message"],
  }
},
{
  timestamps: true, // Adding timestamps to the schema
});

// Exporting model using the schema
module.exports = mongoose.model('MotivationalTip', MotivationalTipSchema);