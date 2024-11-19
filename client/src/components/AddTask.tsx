import { useMutation } from '@apollo/client';
import React from 'react';
import { ADD_TASK } from '../utils/mutations';

const AddTask: React.FC = () => {
    const [task_name, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [addTask, { error }] = useMutation(ADD_TASK);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await addTask({ variables: { task_name, description } });
            setTaskName('');
            setDescription('');
        } catch (err) {
            console.error(err);
        }
    };

    return (
     <div>
        <h1>Add Task</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="task_name">Task Title:</label>
                <input
                    type="text"
                    id="task_name"
                    value={task_name}
                    onChange={(e) => setTaskName(e.target.value)}
                    />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
            </div>
            <button type="submit">Add Task</button>
        </form>
        {error && <p>Error: {error.message}</p>}
     </div>
    );
};

export default AddTask;
