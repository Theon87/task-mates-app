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