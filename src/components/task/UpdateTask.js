import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTask, addTask } from "../../actions/taskAction";

class UpdateTask extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      taskName: "",
      description: "",
      label: "",
      dueDate: "",
      createdDate: "",
      status: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  //lifecycyle hook to set state
  componentWillReceiveProps(nextProps) {
    const {
      id,
      taskName,
      description,
      label,
      dueDate,
      createdDate,
      status,
    } = nextProps.task;

    this.setState({
      id,
      taskName,
      description,
      label,
      dueDate,
      createdDate,
      status,
    });
  }

  //lifecycle hook to load data
  componentDidMount() {
    console.log("Calling get method");
    const { id } = this.props.match.params;
    this.props.getTask(id, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    console.log("Inside on submit ");
    e.preventDefault();
    const updatedTask = {
      id: this.state.id,
      taskName: this.state.taskName,
      description: this.state.description,
      label: this.state.label,
      dueDate: this.state.dueDate,
      createdDate: this.state.createdDate,
      status: this.state.status,
    };
    this.props.addTask(updatedTask, this.props.history);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <Link to="/dashboard" className="btn btn-light">
              Back to Dash Board
            </Link>
            <h4 className="display-4 text-center">Update Task</h4>
            <hr />
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="taskName"
                  placeholder="Task Name"
                  value={this.state.taskName}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="description"
                  placeholder="Task Description"
                  value={this.state.description}
                  onChange={this.onChange}
                />
              </div>
              <h5>Due Date</h5>
              <div className="form-group">
                <input
                  type="date"
                  className="form-control form-control-lg"
                  name="dueDate"
                  value={this.state.dueDate}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <select
                  className="form-control form-control-lg"
                  name="priority"
                  onChange={this.onChange}
                >
                  <option value={0}>Select Priority</option>
                  <option value={1}>High</option>
                  <option value={2}>Medium</option>
                  <option value={3}>Low</option>
                </select>
              </div>

              <div className="form-group">
                <select
                  className="form-control form-control-lg"
                  name="status"
                  value={this.state.status}
                  onChange={this.onChange}
                >
                  <option value="">Select Status</option>
                  <option value="TO_DO">TO DO</option>
                  <option value="IN_PROGRESS">IN PROGRESS</option>
                  <option value="DONE">DONE</option>
                </select>
              </div>

              <input type="submit" className="btn btn-primary btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

UpdateTask.propTypes = {
  task: PropTypes.object.isRequired,
  getTask: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  task: state.task.task,
});

export default connect(mapStateToProps, { getTask, addTask })(UpdateTask);
