// This file configures our Express application
//
// Load the module dependencies
var config = require('./config'),
    express = require('express'),
    morgan = require('morgan'), // Logging middleware
    compress = require('compression'), // Response compression middleware
    bodyParser = require('body-parser'), // Request body parsing middleware
    methodOverride = require('method-override'), // HTTP method override middleware
    session = require('express-session'), // Session middleware
    cookieParser = require('cookie-parser'), // Request cookie parsing middleware
    cors = require('cors'); // Cross-Origin Resource Sharing middleware

// Create a new Express application instance
module.exports = function () {
    // Create the Express application object
    var app = express();
    
    // Use the 'NODE_ENV' variable to activate the appropriate middleware
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev')); // Log requests to the console
    } else if (process.env.NODE_ENV === 'production') {
        app.use(compress()); // Compress response bodies for better performance
    }
    
    // Use the middleware functions
    app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded request bodies
    app.use(bodyParser.json()); // Parse JSON request bodies
    app.use(cookieParser()); // Parse cookies in requests
    app.use(cors()); // Enable Cross-Origin Resource Sharing
    app.use(methodOverride()); // Override HTTP methods where necessary
    
    // Configure the 'session' middleware
    app.use(session({
        saveUninitialized: true, // Save uninitialized sessions to the store
        resave: true, // Save sessions back to the store
        secret: config.sessionSecret // Use our session secret
    }));
    
    // Configure the view engine
    app.set('views', './app/views');
    app.set('view engine', 'ejs');
    app.engine('html', require('ejs').renderFile);
    
    // Serve static files from the public folder
    app.use(express.static('./public'));
    
    return app;
};

// In summary, this file configures our Express application by setting up middleware functions, configuring session management, configuring the view engine, and serving static files. The middleware functions used include morgan, compression, bodyParser, methodOverride, cookieParser, and cors.