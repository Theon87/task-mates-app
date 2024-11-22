import { gql } from '@apollo/client';

export const QUERY_ALL_USERS = gql`
query GetAllUsers {
  users {
    _id
    username
    firstName
    lastName
    tasks {
      _id
      taskName
      description
      dueDate
    }
  }
}
`;

export const QUERY_SINGLE_USER = gql`
query GetOneUser($userId: ID!) {
  user(userId: $userId) {
    _id
    firstName
    lastName
    username
    email
    tasks {
      _id
      taskName
      description
      dueDate
    }
  }
}
`;

export const QUERY_ME = gql`
query ME {
  me {
    _id
    firstName
    lastName
    username
    email
    tasks {
      _id
      taskName
      description
      dueDate
    }
  }
}
`;