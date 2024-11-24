import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation AddUser($input: UserInput!) {
  addUser(input: $input) {
    token
    user {
      _id
      username
      tasks {
        _id
        taskName
        description
        dueDate
      }
    }
  }
}
`;

export const LOGIN_USER = gql`
mutation LOGIN($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;

export const ADD_TASK = gql`
mutation AddTask($userId: ID!, $taskName: String!, $description: String!, $dueDate: String!) {
  addTask(userId: $userId, taskName: $taskName, description: $description, dueDate: $dueDate) {
    _id
    username
    tasks {
      _id
      taskName
      description
      dueDate
    }
  }
}
`;