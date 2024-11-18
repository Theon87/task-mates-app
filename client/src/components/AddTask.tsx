import React, { useState}  from 'react';
import { addSyntheticTrailingComment } from 'typescript';

interface AddTaskProps {
    onAdd: (task:string) => void; // function to handle new task addition
}

const AddTask: React.FC<AddTaskProps> = ({ onAdd }) => {
    const [task, setTask] = useState("");
}

const handleSubmit = (event: React.FromEvent) => {
    event.preventDefault();
    if (task.trim()) {
        onAdd(task);
        setTask("");
    }
};