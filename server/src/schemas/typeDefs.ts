const typeDefs = `
  type User {
    _id: ID
    first_name: String
    last_name: String
    username: String
    email: String
    password: String
  }


  type Auth {
    token: ID!
    user: User
  }

    
  input UserInput {
    first_name: String!
    last_name: String!
    username: String!
    email: String!
    password: String!
  }
  
  type Query {
    user: User
  }

  type Task {
    _id: ID!
    creator: String!
    assignees: [String]!
    description: String!
    status: Boolean!
    created_at: Date
    due_date: Date
    date_completed: Date

  }

  input TaskInput {
    task: String!
    completed: Boolean
    
  }

  type Mutation {
    addUser(input: UserInput!): Auth
    login(email: String!, password: String!): Auth
  }
`;

export default typeDefs;