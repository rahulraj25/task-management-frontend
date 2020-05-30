import React from "react";
import { Link } from "react-router-dom";

export const AddTaskButton = () => {
  return (
    <React.Fragment>
      <Link to="/addTask" className="btn btn-lg btn-info">
        Add a New Task
      </Link>
    </React.Fragment>
  );
};

export default AddTaskButton;
