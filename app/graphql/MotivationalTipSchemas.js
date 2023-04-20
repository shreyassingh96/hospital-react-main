// Importing required GraphQL packages
var GraphQLObjectType = require("graphql").GraphQLObjectType;
var GraphQLList = require("graphql").GraphQLList;
var GraphQLNonNull = require("graphql").GraphQLNonNull;
var GraphQLString = require("graphql").GraphQLString;

// Importing the MotivationalTipModel for CRUD operations
var MotivationalTipModel = require("../models/MotivationalTipModel");

// Defining the GraphQL object type for MotivationalTip with its fields
const motivationalTipType = new GraphQLObjectType({
    name: 'motivationalTip',
    fields: function () {
        return {
            _id: {
                type: GraphQLString,
            },
            message: {
                type: GraphQLString,
            }
        };
    }
});

// Defining the QueryType
const queryType = {
    MotivationalTips: {
        type: new GraphQLList(motivationalTipType),
        resolve: function () {
            // Retrieve all MotivationalTips from MongoDB database and sort them by _id
            const MotivationalTips = MotivationalTipModel.find().sort({_id:-1}).limit(1).exec();
            if (!MotivationalTips) {
                throw new Error("MotivationalTips not found");
            }
            return MotivationalTips;
        },
    }
};

// Defining the MutationType
const Mutation = {
    createMotivationalTip: {
        type: motivationalTipType,
        args: {
            message: {
                type: new GraphQLNonNull(GraphQLString)
            }
        },
        resolve: function (root, params) {
            // Create a new MotivationalTip with the passed message and save it to the MongoDB database
            const motivationalTipModel = new MotivationalTipModel(params);

            const newMotivationalTip = motivationalTipModel.save();
            if (!newMotivationalTip) {
                throw new Error("Could not enter the motivational Tip details!");
            }
            return newMotivationalTip;
        },
    }
};

// Exporting the Query and Mutation for MotivationalTip
module.exports = {
    motivationalTipQuery: queryType,
    motivationalTipMutation: Mutation,
};