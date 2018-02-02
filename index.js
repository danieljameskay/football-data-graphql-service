const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema'); 

const app = express();

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

app.listen(process.env.PORT || 1337, () => {
    console.log('Listening...')
});