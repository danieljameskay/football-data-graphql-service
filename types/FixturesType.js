const graphql = require('graphql');
const FixtureType = require('./FixtureType');

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } = graphql;

const FixturesType = new GraphQLObjectType({
    name: 'Fixtures',
    fields: () => ({
        timeFrameStart: {
            type: GraphQLString 
        },
        timeFrameEnd: {
            type: GraphQLString 
        },
        count: {
            type: GraphQLInt
        },
        fixtures: {
            type: new GraphQLList(FixtureType)
        }
    })
});

module.exports = FixturesType
