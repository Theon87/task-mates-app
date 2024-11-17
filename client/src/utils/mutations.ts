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
