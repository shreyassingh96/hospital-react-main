// Load the necessary modules:
var config = require('./config'); // configuration module
var mongoose = require('mongoose'); // MongoDB ODM module

// Define the Mongoose configuration function
module.exports = function () {
    
    // Use Mongoose to connect to MongoDB database
    const db = mongoose.connect(config.db, { // get the database URL from config module
        useUnifiedTopology: true, // new Server Discover and Monitoring engine
        useNewUrlParser: true, // new parser
        useCreateIndex: true // index creation in MongoDB
    })
    .then(() => console.log('Database connected successfully!'))
    .catch(err => {
        console.log('Database connection error: ', err.message);
    });
    
    // Load the mongoose models for User, VitalSign, EmergencyAlert and MotivationalTip
    require('../app/models/UserModel');
    require('../app/models/VitalSignModel');
    require('../app/models/EmergencyAlertModel');
    require('../app/models/MotivationalTipModel');
    
    // Return the Mongoose connection instance
    return db;
}; 

// This file exports a function that sets up a connection to a MongoDB database using Mongoose. The function loads the necessary modules, connects to the database using the URL from the configuration module, loads the mongoose models for User, VitalSign, EmergencyAlert and MotivationalTip, and returns the Mongoose connection instance.