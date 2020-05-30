import React, { Component } from "react";
import { Link } from "react-router-dom";

class TaskCard extends Component {
  render() {
    const { task } = this.props;
    return (
      <div className="card mb-1 bg-light">
        <div className="card-header text-primary">
          Task ID: {task.id} Label: {task.taskName}
        </div>
        <div className="card-body bg-light">
          <h5 className="card-title">{task.description}</h5>
          <Link to="/updateTask" className="btn btn-primary">
            View / Update
          </Link>
          <button className="btn btn-danger ml-4">Delete</button>
        </div>
      </div>
    );
  }
}

export default TaskCard;
