// Very basic implementation sans Type Script.
var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var cors = require('cors')
import root from './graphql/Root';
import schema from './graphql/Schema';

var corsOptions = {
  origin: true
}


var app = express();
app.use(cors(corsOptions))
app.options('*', cors(corsOptions))
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(8080);
console.log('Running a GraphQL API server at http://localhost:8080/graphql');