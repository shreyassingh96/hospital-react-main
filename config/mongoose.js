// Load the module dependencies:
//  config.js module and mongoose module
var config = require('./config'),
    mongoose = require('mongoose');
// Define the Mongoose configuration method
module.exports = function () {
    // Use Mongoose to connect to MongoDB
    const db = mongoose.connect(config.db, {
		useUnifiedTopology: true,
		useNewUrlParser: true, useCreateIndex: true 
		}).then(() => console.log('DB Connected!'))
		.catch(err => {
		console.log('Error'+err.message);
		});

    // const db = mongoose.connect(config.db, {
    //   useUnifiedTopology: true,
    //   useNewUrlParser: true,
    //   useCreateIndex: true
    // }).then(() => {
    //   console.log('DB Connected!');
    // }).catch(err => {
    //   console.log('Error: ' + err.message);
    // });

//     const mongoose = require('mongoose');

//     const db = mongoose.connect(config.db, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log('Database connection successful');
// }).catch(err => {
//   console.error('Database connection error: ' + err.message);
// });

    

    require('../app/models/UserModel');
    require('../app/models/VitalSignModel');
    require('../app/models/EmergencyAlertModel');
    require('../app/models/MotivationalTipModel');
    // Return the Mongoose connection instance
    return db;
};