import React, { Component } from "react";
import TaskCard from "./TaskCard";

class TaskList extends Component {
  render() {
    const { tasklist } = this.props;
    console.log("Props: " + { tasklist });

    const tasks = tasklist.map((task) => (
      <TaskCard key={task.id} task={task} />
    ));

    let todoItems = [];
    let inProgressItems = [];
    let doneItems = [];

    for (let i = 0; i < tasks.length; i++) {
      if (
        tasks[i].props.task.status === "TO_DO" ||
        tasks[i].props.task.status === null
      ) {
        todoItems.push(tasks[i]);
      }

      if (tasks[i].props.task.status === "IN_PROGRESS") {
        inProgressItems.push(tasks[i]);
      }

      if (tasks[i].props.task.status === "DONE") {
        doneItems.push(tasks[i]);
      }
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card text-center mb-2">
              <div className="card-header bg-primary text-white">
                <h3>TO DO</h3>
              </div>
            </div>
            {todoItems}
          </div>
          <div className="col-md-4">
            <div className="card text-center mb-2">
              <div className="card-header bg-warning text-white">
                <h3>In Progress</h3>
              </div>
            </div>
            {inProgressItems}
          </div>
          <div className="col-md-4">
            <div className="card text-center mb-2">
              <div className="card-header bg-success text-white">
                <h3>Done</h3>
              </div>
            </div>
            {doneItems}
          </div>
        </div>
      </div>
    );
  }
}

export default TaskList;
