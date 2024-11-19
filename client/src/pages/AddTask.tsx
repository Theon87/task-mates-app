import { useMutation, useQuery } from '@apollo/client';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Container, Header, Icon, List, Segment } from 'semantic-ui-react';
import { GET_TASKS,  ADD_TASK } from '../utils/queries';

import { useNavigate } from 'react-router-dom';

//import AddTaskButton from '../components/AddTaskButton';

const TaskList = () => {
    const { loading, error, data } = useQuery(GET_TASKS,{
        variables: { task_name: '' },
    });

    const [tasks, setTasks] = useState([]);

    useEffect (() => {
        if (data && data.tasks) {
            const completedTasks = data.tasks.filter((task) => task.status === true);
            setTasks(completedTasks);
        }
}, [data]);

if (loading) return <p>Loading...</p>;
if (error) return <p>Error loading tasks...</p>;

// const tasks = () => {
//     const [ formState, setFormState ] = useState({
//         task_name: '',
//         description: '',
//         due_date: '',
//     });
// }



// const AddTask: React.FC = () => {
//     const [task_name, setTaskName] = useState('');
//     const [description, setDescription] = useState('');
//     const [due_date, setDueDate] = useState('');
    
//     const [addTask, { error }] = useMutation(ADD_TASK);
//     const navigate = useNavigate();

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         try {
//             await addTask({ 
//                 variables: { 
//                     task_name, description } });
//             setTaskName('');
//             setDescription('');
//         } 
// //Redirect to task list page after the successful addition of a task
//         navigate('/');
//     },   catch (err) {
//     console.error('Error adding task:', err);
// }
// };


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
            {/* updates database with new task */}
        </form>
        {error && <p>Error: {error.message}</p>}
     </div>
    );
};

export default AddTask;
