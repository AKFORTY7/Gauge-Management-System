const { gql } = require('apollo-server-express');

const typeDefs = gql`
 type Category {
    _id: ID
    category_name: String
  }
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
  }

  type Gauge {
    _id: ID
    gauge_name: String
    category: Category
    current_inventory: Int!
    quantity_borrowed: Int
    inhouse_PN:  String
    createdAt: String
  }


  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    gauges: [Gauge]
    categories: [Category]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    
    }
`;

module.exports = typeDefs;
