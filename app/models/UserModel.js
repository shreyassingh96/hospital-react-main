// Load the module dependencies
const mongoose = require('mongoose');

// Define a new 'UserSchema'
const Schema = mongoose.Schema;

// Define the schema fields and their validation requirements
const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: [true, "Email must be unique"],
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
  },
  firstName: {
    type: String,
    required: [true, "Please add a first name"],
  },
  lastName: {
    type: String,
    required: [true, "Please add a last name"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Please add a phone number"],
  },
  userCategory: {
    type: String,
    enum : ['nurse', 'patient']
  }
});

// Set the 'fullName' virtual property
UserSchema.virtual('fullName').get(function() {
  return this.firstName + ' ' + this.lastName;
}).set(function(fullName) {
  const splitName = fullName.split(' ');
  this.firstName = splitName[0] || '';
  this.lastName = splitName[1] || '';
});

// Configure the 'UserSchema' to use getters and virtuals when transforming to JSON
UserSchema.set('toJSON', {
  getters: true,
  virtuals: true
});

// Create the 'User' model out of the 'UserSchema'
const User = mongoose.model('User', UserSchema);
module.exports = User; // Export the model for use in other modules