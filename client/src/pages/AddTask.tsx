import { type FormEvent, useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';

import { ADD_TASK } from '../utils/mutations';

import Auth from '../utils/auth';

interface TaskFormProps {
    userId?: string;
}

const AddTask: React.FC<TaskFormProps> = ({ userId }) => {

    const { data } = Auth.getUser();
    userId = data._id;
    

    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    
    const [addTask, { error }] = useMutation(ADD_TASK);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
        await addTask({ 
            variables: { userId, taskName, description, dueDate } 
            });

            setTaskName('');
            setDescription('');
            setDueDate('');

            window.location.assign('/');
    } catch (err) {
        console.error('Error adding task:', err);
        }
    };

    

    return (
        <>
            <div>
                <h4>Add Task</h4>

                {Auth.isLoggedIn() ? (
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
                                                name="taskName"
                                                placeholder="Task Name"
                                                required
                                                onChange={(e) => setTaskName(e.target.value)}
                                            />
                                        </div>
                                        <div className="field">
                                            <label>Task Description</label>
                                            <input
                                                type="text"
                                                name="description"
                                                placeholder="Task Description"
                                                required
                                                onChange={(e) => setDescription(e.target.value)}
                                            />
                                        </div>
                                        <div className="field">
                                            <label>Due Date</label>
                                            <input
                                                type="date"
                                                name="dueDate"
                                                required
                                                onChange={(e) => setDueDate(e.target.value)}
                                            />
                                        </div>
                                <button className="ui teal button" type="submit">
                                Add Task
                                </button>
                                {error && (
                                    <div className="ui container">
                                        {error.message}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>) : (
                    <>
                    <p>You need to be logged in to add a task.</p>
                    <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
                    </>
                )}
            </div>
        </>
    );
};

export default AddTask;