import { gql } from 'apollo-server-express';

const typeDefs = gql`
  
  type User {
    _id: ID!
    name: String!
    email: String! 
    tasks: [Task] # List of tasks created by the user
  }

  type Task {
    _id: ID!
    name: String!
    description: String
    completed: Boolean!
    createdBy: User!
    dueDate: String
  }

# Authentication response type (contains token and user details)
  type Auth {
    token: String!
    user: User!
  }

# Input types for creating or updating objects
  input SignupInput {
    name: String!
    email: String!
    password: String!
  }
    input TaskInput {
    name: String!
    description: String
    completed: Boolean
    dueDate: String
  }

  input UpdateTaskInput {
    name: String
    description: String
    completed: Boolean
    dueDate: String
  }

# Queries for fetching data
  type Query {
    me: User  # Fetch the currently authenticated user's profile
    tasks: [Task]  # Fetch tasks belonging to the authenticated user
    task(taskId: ID!): Task  # Fetch a specific task by ID
  }

# Mutations for creating, updating, or deleting data
  type Mutation {
    signup(input: SignupInput): Auth!  # User signup (create new user)
    login(email: String!, password: String!): Auth!  # User login (return token and user)
    addTask(input: TaskInput): Task!  # Create a new task
    updateTask(taskId: ID!, input: UpdateTaskInput): Task!  # Update an existing task
    removeTask(taskId: ID!): Task!  # Delete a task
  }
`;


export default typeDefs;
