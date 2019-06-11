const expressGraphql = require('express-graphql');
const expressServer = require('express');
const schema = require('./schema.js');

expressServer.use('/', expressGraphql({
    schema: schema,
    graphql: true
}));

expressServer.listen(8080);