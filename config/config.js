// This module exports a configuration object based on the current environment

// Load the configuration file corresponding to the current environment
// process.env.NODE_ENV is set in the server.js file to 'development'
// This code will return the module at the path './env/development.js'
module.exports = require('./env/' + process.env.NODE_ENV + '.js');