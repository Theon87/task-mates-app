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