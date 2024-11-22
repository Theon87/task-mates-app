//import React from 'react';
import { Container, Header, Segment, List, Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";

interface Task {
  id: string;
  taskName: string;
  description: string;
  dueDate: string;
}

interface UserData {
  _id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  tasks: Task[];
}

const TaskList = () => {
  const { loading, data } = useQuery(QUERY_ME);

  const userData: UserData = data?.me || {};
  console.log(userData);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData?._id) {
    return <h4>You need to be logged in to see this page</h4>;
  }

  const tasks = userData?.tasks?.map(task => ({
    taskName: task.taskName,
    description: task.description,
    dueDate: task.dueDate
  })) || [];

  return (
    <Container className="tasklist">
      <Header as="h1" textAlign="center">
        <Icon name="tasks" /> Daily Task List
      </Header>
      <Segment>
        <Header as="h3">Tasks to be Completed</Header>
        {tasks.length > 0 ? (
          <List>
            {userData.tasks.map((task) => (
              <List.Item key={task.id}>
                <Icon name="tasks" />
                <List.Content>
                  <List.Header>{task.taskName}</List.Header>
                  <br></br>
                  <br></br>
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
