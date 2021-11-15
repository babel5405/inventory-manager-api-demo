// Very basic implementation sans Type Script.
var express = require('express');
var { graphqlHTTP } = require('express-graphql');
import root from './graphql/Root';
import schema from './graphql/Schema';

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(8080);
console.log('Running a GraphQL API server at http://localhost:8080/graphql');