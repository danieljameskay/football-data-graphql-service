const graphql = require('graphql');
const ResultType = require('./ResultType');

const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;

const FixtureType = new GraphQLObjectType({
    name: 'Fixture',
    fields: () => ({
        id: {
            type: GraphQLInt 
        },
        competitionId: {
            type: GraphQLInt 
        },
        date: {
            type: GraphQLString 
        },
        matchday: {
            type: GraphQLInt 
        },
        homeTeamName: {
            type: GraphQLString 
        },
        homeTeamId: {
            type: GraphQLInt 
        },
        awayTeamName: {
            type: GraphQLString 
        },
        awayTeamId: {
            type: GraphQLInt 
        },
        result: { 
            type: ResultType
        }
    })
});

module.exports = FixtureType