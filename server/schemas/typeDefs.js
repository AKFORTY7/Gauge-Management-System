const { gql } = require('apollo-server-express');

const typeDefs = gql`
 type Category {
    _id: ID
    name: String
  }
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
  }

  type Gauge {
    _id: ID
    category: String!
    current_inventory: Int!
    quantity_borrowed: Int
    inhouse_PN:  String
    createAt: String
  }


  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;
