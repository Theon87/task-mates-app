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

  type AddTask {
    _id: ID
    creator: String
    assignees: [String]!
    task_name: String!
    description: String!
    status: Boolean!
    created_at: String
    due_date: String
    date_completed: String
  }

  input TaskInput {
    task_name: String!
    description: String!
    assignees: [String]!
    status: Boolean!
  }

  input RemoveTaskInput {
    task_name: String!
    user: String!
  }

  type Mutation {
    addUser(input: UserInput!): Auth
    login(email: String!, password: String!): Auth
    addTask(input: TaskInput!): Task
    removeTask(input: RemoveTaskInput!): Task
  }
`;

export default typeDefs;