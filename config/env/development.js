// Development configuration options
// To sign the session identifier, use a secret string
module.exports = {
    // MongoDB connection string
    db: 'mongodb+srv://admin:admin@cluster0.5eepvsg.mongodb.net/test?retryWrites=true&w=majority',
    // db: 'mongodb://127.0.0.1:27017/hospital-db',
    
    // Secret key used to sign session identifier
    sessionSecret: 'developmentSessionSecret',
    
    // Secret key used for other purposes (e.g. encryption)
    secretKey: 'real_secret'
  };
  
  // Alternative MongoDB connection string for MongoDB Atlas
  // mongodb+srv://admin:admin@cluster0.5eepvsg.mongodb.net/test?retryWrites=true&w=majority