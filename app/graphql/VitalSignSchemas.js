// Import required packages and modules
var GraphQLObjectType = require("graphql").GraphQLObjectType;
var GraphQLList = require("graphql").GraphQLList;
var GraphQLNonNull = require("graphql").GraphQLNonNull;
var GraphQLString = require("graphql").GraphQLString;
const mongoose = require("mongoose");

// Import the VitalSignModel module
var VitalSignModel = require("../models/VitalSignModel");

// Define the GraphQL object type for vitalSigns
const vitalSignType = new GraphQLObjectType({
    name: 'vitalSign',
    fields: function() {
        return {
            _id: {
                type: GraphQLString,
            },
            bodyTemperature: {
                type: GraphQLString,
            },
            heartRate: {
                type: GraphQLString,
            },
            bloodPressure: {
                type: GraphQLString,
            },
            respiratoryRate: {
                type: GraphQLString,
            },
            weight: {
                type: GraphQLString,
            },
            patient: {
                type: GraphQLString
            },
        };
    }
});

// Define the GraphQL query type
const queryType = {
    vitalSigns: {
        type: new GraphQLList(vitalSignType),
        resolve: function () {
            // Find all vitalSigns in the database and return them
            const vitalSigns = VitalSignModel.find().exec();
            if(!vitalSigns) {
                throw new Error("vitalSigns not found");
            }
            return vitalSigns;
        },
    },

    vitalSign: {
        type: new GraphQLList(vitalSignType),
        args: {
            patient: {
                type: new GraphQLNonNull(GraphQLString),
            },
        },
        resolve: function (root, params) {
            // Find the vitalSigns for a particular patient and return them
            const vitalSign = VitalSignModel.find({patient : params.patient}).exec();
            console.log(vitalSign)
            if(!vitalSign) {
                throw new Error("VitalSigns not found for this patient");
            }
            return vitalSign;
        },
    }
};

// Define the GraphQL mutation type
const Mutation = {
    createVitalSign: {
        type: vitalSignType,
        args: {
            bodyTemperature: {
                type: new GraphQLNonNull(GraphQLString)
            },
            heartRate: {
                type: GraphQLString
            },
            bloodPressure: {
                type: GraphQLString
            },
            respiratoryRate: {
                type: GraphQLString
            },
            weight: {
                type: GraphQLString
            },
            patient: {
                type: GraphQLString
            },
        },
        resolve: function (root, params) {
            // Create a new vitalSign entry in the database and return it
            const vitalSignModel = new VitalSignModel(params);

            const newVitalSign = vitalSignModel.save();
            if(!newVitalSign) {
                throw new Error("Could not enter the VitalSign details!");
            }
            return newVitalSign;
        },
    }
};

// Export the query and mutation types
module.exports = {
    vitalSignQuery: queryType,
    vitalSignMutation: Mutation,
};