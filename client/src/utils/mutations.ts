import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation Signup($input: UserInput!) {
  addUser(input: $input) {
    token
    user {
      username
      first_name
      last_name
      email
      _id
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
mutation AddTask($input: TaskInput!) {
  addTask(input: $input) {
    _id
    creator
    assignees
    task_name
    description
    status
    due_date
  }
}
`;

export const REMOVE_TASK = gql`
mutation RemoveTask($input: RemoveTaskInput!) {
  removeTask(input: $input) {
    creator
    task_name
  }
}
`;