import React from "react";
import { Button, Icon } from "semantic-ui-react";

interface AddTaskButtonProps {
  onClick: () => void; // Callback function when button is clicked
}

const AddTaskButton: React.FC<AddTaskButtonProps> = ({ onClick }) => {
  return (
    <Button
      color="blue" // Choose a color for the button
      icon
      labelPosition="left"
      onClick={onClick}
      style={{ margin: "1rem 0" }} // Add some spacing around the button
    >
      <Icon name="plus" />
      Add Task
    </Button>
  );
};

export default AddTaskButton;
