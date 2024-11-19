//import React from 'react';
import { Container, Header, Segment, List, Icon, Button } from "semantic-ui-react";
import AddTasks from "./AddTasks";
import { Link } from "react-router-dom";

const TaskList = () => {
  const tasks = [
    {
      id: 1,
      creator: "User 1",
      task_name: "Task 1", //task must have title, was not included in original db diagram
      collaborators: ["user2"],
      description: "Task 1 Description",
      status: false,
      created_at: Date,
      due_date: Date,
      date_completed: Date,
    },
    {
      id: 4,
      creator: "User 2",
      task_name: "Task 8", //task must have title, was not included in original db diagram
      collaborators: ["user4"],
      description: "Task 1 Description",
      status: false,
      created_at: Date,
      due_date: Date,
      date_completed: Date,
    },
    {
      id: 3,
      creator: "User 4",
      task_name: "Task 9", //task must have title, was not included in original db diagram
      collaborators: ["user1"],
      description: "Task 1 Description",
      status: false,
      created_at: Date,
      due_date: Date,
      date_completed: Date,
    },
  ];

  return (
    <Container>
      <Header as="h1" textAlign="center">
        <Icon name="tasks" /> Daily Task List
      </Header>
      <Segment>
        <Header as="h3">Tasks to be Completed</Header>
        {tasks.length > 0 ? (
          <List>
            {tasks.map((task) => (
              <List.Item key={task.id}>
                <Icon name="tasks" />
                <List.Content>
                  <List.Header>{task.task_name}</List.Header>
                  <List.Description>{task.description}</List.Description>
                </List.Content>
              </List.Item>
            ))}
          </List>
        ) : (
          <p>No tasks to display</p>
        )}
      </Segment>
      <Button as={Link} to="/addtask" color="blue">
        Add Task
      </Button>
    </Container>
  );
};

export default TaskList;
