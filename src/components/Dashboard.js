import React, { Component } from "react";
import TaskList from "../components/task/TaskList";
import { AddTaskButton } from "./task/AddTaskButton";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTasks } from "../actions/taskAction";

class Dashboard extends Component {
  //lifecycle hooks
  componentDidMount() {
    this.props.getTasks();
  }
  render() {
    const { tasks } = this.props.task;
    console.log("Tasks fetched: " + { tasks });
    return (
      <div className="container">
        <AddTaskButton />
        <hr />
        <TaskList tasklist={tasks} />
      </div>
    );
  }
}

Dashboard.propTypes = {
  task: PropTypes.object.isRequired,
  getTasks: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  task: state.task,
});

export default connect(mapStateToProps, { getTasks })(Dashboard);
