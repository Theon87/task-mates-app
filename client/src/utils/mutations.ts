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
mutation ADD_TASK($userId: ID!, $taskName: String!, $description: String!, $dueDate: String!) {
  addTask(userId: $userId, taskName: $taskName, description: $description, dueDate: $dueDate) {
    _id
    taskName
    description
    dueDate
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

export const UPDATE_TASK = gql`
mutation UpdateTask($input: UpdateTaskInput!) {
  updateTask(input: $input) {
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