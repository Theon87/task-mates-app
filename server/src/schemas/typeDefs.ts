const typeDefs = `
  type User {
    _id: ID
    first_name: String
    last_name: String
    username: String
    email: String
    password: String
    tasks: [Task]!
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
    _id: ID
    task_name: String!
    description: String!
    due_date: String
  }

  input RemoveTaskInput {
    task_name: String!
    user: String!
  }

  type Mutation {
    addUser(input: UserInput!): Auth
    login(email: String!, password: String!): Auth
    addTask(task_name, description, due_date): Task
    removeTask(input: RemoveTaskInput!): Task
  }
`;

export default typeDefs;