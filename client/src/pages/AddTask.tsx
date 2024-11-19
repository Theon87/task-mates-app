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
            const completedTasks = data.tasks.filter((task: { status: boolean; }) => task.status === true);
            setTasks(completedTasks);
        }
}, [data]);

const [addTask, { error }] = useMutation
(ADD_TASK, {
    refetchQueries: [{ 
        query: GET_TASKS, variables: { task_name: '' } }],
});

// const handleFormSubmit = async (event: FormEvent) => {
//     event.preventDefault();

    function handleFormSubmit(_event: FormEvent<HTMLFormElement>): void {
        throw new Error('Function not implemented.');
    }

    function handleChange(_event: ChangeEvent<HTMLInputElement>): void {
        throw new Error('Function not implemented.');
    }

// const tasks = () => {
//     const [ formState, setFormState ] = useState({
//         task_name: '',
//         description: '',
//         due_date: '',
//     });
// }



// const AddTask: React.FC = () => {
    const [task_name, setTaskName] = useState('');
    const [description, setDescription] = useState('');
//     const [due_date, setDueDate] = useState('');
    
//     const [addTask, { error }] = useMutation(ADD_TASK);
//     const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await addTask({ 
                variables: { 
                    task_name, description } });
            setTaskName('');
            setDescription('');
        } 
// //Redirect to task list page after the successful addition of a task
//         navigate('/');
//     },   catch (err) {
//     console.error('Error adding task:', err);
// }
// };
if (loading) return <p>Loading...</p>;
if (error) return <p>Error loading tasks...</p>;



return (
    <div className="ui container" style={{ marginTop: "50px" }}>
      <div className="ui centered grid">
        <div className="eleven wide column">
          <h2 className="ui teal header">
            <i className="signup icon"></i>
            <div className="content">Add Task</div>
                    </h2>
                    <form
                        className="ui form"
                        id="signup-form"
                        onSubmit={handleSubmit}
                    >
                        <div className="field">
                            <label>Task Name</label>
                            <input
                                type="text"
                                name="task_name"
                                placeholder="Task Name"
                                required
                                onChange={(e) => setTaskName(e.target.value)}
                            />
                        </div>
                        <div className="field">
                            <label>Last Name</label>
                            <input
                                type="text"
                                name="setDescription"
                                placeholder="Task Description"
                                required
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className="field">
                            <label>Due Date</label>
                            <input
                                type="date"
                                name="due_date"
                                required
                                onChange={(e) => setDueDate(e.target.value)}
                            />
                        </div>
            </form>
        </div>
    </div>
</div>
    );
};

export default AddTask;
