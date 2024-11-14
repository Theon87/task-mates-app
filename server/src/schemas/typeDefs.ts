import { gql } from 'apollo-server-express';


const typeDefs = gql`
  
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String!  
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