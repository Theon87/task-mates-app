const typeDefs = `
  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    password: String
    tasks: [Task]
  }
    
  type Task {
    _id: ID
    taskName: String
    description: String
    dueDate: String
  }

  type Auth {
    token: ID!
    user: User
  }
    
  input UserInput {
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    password: String!
  }
  
  type Query {
    users: [User]!
    user(userId: ID!): User
    me: User
  }

  type Mutation {
    addUser(input: UserInput!): Auth
    login(email: String!, password: String!): Auth

    addTask(userId: ID!, taskName: String!, description: String!, dueDate: String!): User
  }
`;

export default typeDefs;