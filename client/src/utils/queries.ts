import { gql } from '@apollo/client';

export const QUERY_TASKS = gql`
    query task($task_name: String!) {
        task(task_name: $task_name) {
            _id
            creator
            assignees
            task_name
            description
            status
            created_at
            due_date
            date_completed
    }
  }
}
`;

