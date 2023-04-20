// Importing the necessary GraphQL modules
var GraphQLSchema = require("graphql").GraphQLSchema;
var GraphQLObjectType = require("graphql").GraphQLObjectType;

// Importing the different schemas for the app
var { userQuery, userMutation } = require("./UserSchemas");
var { vitalSignQuery, vitalSignMutation } = require("./VitalSignSchemas");
var { emergencyAlertQuery, emergencyAlertMutation } = require("./EmergencyAlertSchemas");
var { motivationalTipQuery, motivationalTipMutation } = require("./MotivationalTipSchemas");

// Creating the root query type
const queryType = new GraphQLObjectType({
    name: "Query",
    fields: function () {
        return {
            ...userQuery,
            ...vitalSignQuery,
            ...emergencyAlertQuery,
            ...motivationalTipQuery
        };
    },
});

// Creating the mutation type
const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: function () {
        return {
            ...userMutation,
            ...vitalSignMutation,
            ...emergencyAlertMutation,
            ...motivationalTipMutation
        };
    },
});

// Exporting the GraphQL schema for use in the app
module.exports = new GraphQLSchema({ query: queryType, mutation: mutation});