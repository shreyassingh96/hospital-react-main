//Development configuration options
//To sign the session identifier, use a secret string
module.exports = {
    db: 'mongodb+srv://admin:admin@cluster0.5eepvsg.mongodb.net/test?retryWrites=true&w=majority',
    sessionSecret: 'developmentSessionSecret',
    secretKey: 'real_secret'
};
