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

export const ADD_TASK = gql`
    mutation AddTask($input: AddTaskArgs!) {
        addTask(input: $input) {
            creator
            assignees
            task_name
            description
            due_date
        }
    }
`;