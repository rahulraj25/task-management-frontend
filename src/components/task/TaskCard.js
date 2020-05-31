import React, { Component } from "react";
import { Link } from "react-router-dom";

class TaskCard extends Component {
  render() {
    const { task } = this.props;
    return (
      <div className="card mb-1 bg-light">
        <div className="card-header text-primary">Task ID: {task.id}</div>
        <div className="card-body bg-light">
          <h4 className="card-title">{task.taskName}</h4>
          <p className="card-text">{task.description}</p>
          <p className="card-text">Due in _____ Days</p>
          <Link to={`/updateTask/${task.id}`} className="btn btn-primary">
            View / Update
          </Link>
          <button className="btn btn-danger ml-4">Delete</button>
        </div>
      </div>
    );
  }
}

export default TaskCard;
