import { gql } from '@apollo/client';

export const GET_TASKS = gql`
    query GetTasks($task_name: String!) {
        task(task_name: $task_name) {
            task_name
            description
            status
            due_date
      }
  }
`;

export const QUERY_USER = gql`
    query Users {
        user {
            _id
            first_name
            last_name
            username
            email
        }
    }
`;

export const QUERY_ME = gql`
    query ME {
        me {
            _id
            username
        }
}
`;