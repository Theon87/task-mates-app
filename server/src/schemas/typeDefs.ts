const typeDefs = `
  type User {
    _id: ID
    first_name: String
    last_name: String
    username: String
    email: String
    password: String
    tasks: [Task]
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
    userById(userId: ID!): User
    me: User
  }

  type Task {
    _id: ID
    taskName: String
    description: String
    dueDate: String
  }

  input RemoveTaskInput {
    task_name: String!
    user: String
  }

  type Mutation {
    addUser(input: UserInput!): Auth
    login(email: String!, password: String!): Auth

    addTask(userId: ID!, taskName: String!, description: String!, dueDate: String!): Task
    removeTask(input: RemoveTaskInput!): Task
  }
`;

export default typeDefs;