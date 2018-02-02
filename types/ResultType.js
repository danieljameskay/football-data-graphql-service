const graphql = require('graphql');

const { GraphQLObjectType, GraphQLInt } = graphql;

const ResultType = new GraphQLObjectType({
    name: 'Result',
    fields: () => ({
        goalsHomeTeam: {
            type: GraphQLInt 
        },
        goalsAwayTeam: {
            type: GraphQLInt 
        },
    })
});

module.exports = ResultType