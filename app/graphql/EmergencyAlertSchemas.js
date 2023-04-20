// Import required modules
var GraphQLObjectType = require("graphql").GraphQLObjectType;
var GraphQLList = require("graphql").GraphQLList;
var GraphQLNonNull = require("graphql").GraphQLNonNull;
var GraphQLString = require("graphql").GraphQLString;
const mongoose = require("mongoose");

// Import required models
var UserModel = require("../models/UserModel");
var EmergencyAlertModel = require("../models/EmergencyAlertModel");

// Define GraphQL object type for emergency alert
const emergencyAlertType = new GraphQLObjectType({
    name: 'emergencyAlert',
    fields: function () {
        return {
            _id: {
                type: GraphQLString,
            },
            alertMessage: {
                type: GraphQLString,
            },
            patient: {
                type: GraphQLString,
            }
        };
    }
});

// Define GraphQL query type
const queryType = {
    // Query to fetch all emergency alerts
    emergencyAlerts: {
        type: new GraphQLList(emergencyAlertType),
        resolve: function () {
            // Find all emergency alerts and return in descending order of ID
            const emergencyAlerts = EmergencyAlertModel.find().sort({_id:-1}).limit(1).exec();
            if (!emergencyAlerts) {
                throw new Error("Emergency Alerts not found");
            }
            return emergencyAlerts;
        },
    },
    // Query to fetch emergency alerts for a specific patient
    emergencyAlert: {
        type: new GraphQLList(emergencyAlertType),
        args: {
            patient: {
                type: new GraphQLNonNull(GraphQLString),
            },
        },
        resolve: function (root, params) {
            // Find emergency alerts for the given patient and return
            const emergencyAlert = EmergencyAlertModel.find({ patient: params.patient }).exec();
            if (!emergencyAlert) {
                throw new Error("Emergency Alerts not found for this patient");
            }
            return emergencyAlert;
        },
    }
};

// Define GraphQL mutation type
const Mutation = {
    // Mutation to create a new emergency alert
    createEmergencyAlert: {
        type: emergencyAlertType,
        args: {
            alertMessage: {
                type: new GraphQLNonNull(GraphQLString)
            },
            patient: {
                type: GraphQLString
            }
        },
        resolve: function (root, params) {
            // Create a new emergency alert and return
            const emergencyAlertModel = new EmergencyAlertModel(params);

            const newEmergencyAlert = emergencyAlertModel.save();
            if (!newEmergencyAlert) {
                throw new Error("Could not enter the Emergency Alert details!");
            }
            return newEmergencyAlert;
        },
    }
};

// Export the query and mutation objects
module.exports = {
    emergencyAlertQuery: queryType,
    emergencyAlertMutation: Mutation,
};