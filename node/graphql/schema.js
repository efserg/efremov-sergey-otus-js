const _ = require('lodash');

const Items = require('./data/items');
const Properties = require('./data/properties');
const Values = require('./data/values');
const Shops = require('./data/shops');
const Prices = require('./data/prices');

const {GraphQLString, GraphQLList, GraphQLObjectType, GraphQLNonNull, GraphQLSchema} = require('graphql');

