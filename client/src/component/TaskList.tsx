import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_TASKS_QUERY } from '../graphql/queries';

const TaskList: React.FC = () => {
  const { loading, error, data } = useQuery(GET_TASKS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {data.tasks.map((task: { name: string; completed: boolean }) => (
          <li key={task.name}>
            {task.name} - {task.completed ? 'Completed' : 'Pending'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
