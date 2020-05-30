import React, { Component } from "react";
import TaskList from "../components/task/TaskList";
import { AddTaskButton } from "./task/AddTaskButton";

class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <AddTaskButton />
        <hr />
        <TaskList />
      </div>
    );
  }
}

export default Dashboard;
