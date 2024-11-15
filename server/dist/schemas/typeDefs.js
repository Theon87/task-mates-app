const typeDefs = `
  type User {
    _id: ID
    first_name: String
    last_name: String
    username: String
    email: String
    password: String
  }

    
  input UserInput {
    name: String!
    email: String!
    password: String!
  }
  
  type Query {
    user: User
  }

  type Mutation {
    addUser(input: UserInput!): Auth
    login(email: String!, password: String!): Auth
  }
`;
export default typeDefs;
