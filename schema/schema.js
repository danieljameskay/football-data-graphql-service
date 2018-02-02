const graphql = require('graphql');
const axios = require('axios');
const FixturesType = require( '../types/FixturesType');

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList, GraphQLNonNull } = graphql;

const SelfTypes = new GraphQLObjectType({
    name: 'Self',
    fields: {
        href: {
            type: GraphQLString 
        }
    }
})

const FixturesUrlTypes = new GraphQLObjectType({
    name: 'FixturesUrl',
    fields: {
        href: {
            type: GraphQLString 
        }
    }
})

const PlayersTypes = new GraphQLObjectType({
    name: 'Players',
    fields: {
        href: {
            type: GraphQLString 
        }
    }
})

const LinksTypes = new GraphQLObjectType({
    name: 'Links',
    fields: {
        self: {
            type: SelfTypes
        },
        fixtures: {
            type: FixturesUrlTypes
        },
        players: {
            type: PlayersTypes
        },
    }
})


const TeamType = new GraphQLObjectType({
    name: 'Team',
    fields: () => ({
        _links: {
            type: LinksTypes
        },
        name: { 
            type: GraphQLString 
        },
        shortName: { 
            type: GraphQLString 
        },
        squadMarketValue: { 
            type: GraphQLString 
        },
        crestUrl: { 
            type: GraphQLString 
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        team: {
            type: TeamType,
            args: {
                teamId: { 
                    type: GraphQLInt
                },
            },
            resolve(parentValue, args) {
                return axios.get(`http://api.football-data.org/v1/teams/${args.teamId}`, {       
                    headers: {
                        "X-Auth-Token" : "6f3f0d49ed4d4a0d907c19d57d33673f"
                    }
                }).then(response => response.data)
            }
        },
        fixturesForTeam: {
            type: FixturesType,
            args: {
                teamId: { 
                    type: GraphQLInt
                },
            },
            resolve(parentValue, args) {
                return axios.get(`http://api.football-data.org/v1/teams/${args.teamId}/fixtures`, {       
                    headers: {
                        "X-Auth-Token" : "6f3f0d49ed4d4a0d907c19d57d33673f"
                    }
                }).then(response => response.data)
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
});