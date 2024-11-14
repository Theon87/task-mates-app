import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TASK_MUTATION } from '../graphql/mutations';

const AddTaskForm: React.FC = () => {
  const [taskName, setTaskName] = useState('');
  const [taskCompleted, setTaskCompleted] = useState(false);

  const [addTask] = useMutation(ADD_TASK_MUTATION);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await addTask({
      variables: { input: { name: taskName, completed: taskCompleted } },
    });

    setTaskName('');
    setTaskCompleted(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task Name"
        required
      />
      <label>
        Completed
        <input
          type="checkbox"
          checked={taskCompleted}
          onChange={(e) => setTaskCompleted(e.target.checked)}
        />
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
