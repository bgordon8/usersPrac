const graphl = require("graphql");

const { GraphqlObjectType, GraphQLString, GraphQLInt } = graphql;

const UserType = new GraphqlObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
});
