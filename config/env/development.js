﻿//Development configuration options
//To sign the session identifier, use a secret string
module.exports = {
    db: 'mongodb://127.0.0.1:27017/hospital-db',
    sessionSecret: 'developmentSessionSecret',
    secretKey: 'real_secret'
};
// mongodb+srv://admin:admin@cluster0.5eepvsg.mongodb.net/test?retryWrites=true&w=majority