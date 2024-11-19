import { useMutation } from '@apollo/client';
import React from 'react';
import { ADD_TASK } from '../utils/mutations';

const AddTask: React.FC = () => {
    const [addTask, { error }] = useMutation(ADD_TASK);
    return (
        <div>
        <h1>Add Task</h1>
        {error && <p>Error: {error.message}</p>}
        </div>
    );
};

export default AddTask;
