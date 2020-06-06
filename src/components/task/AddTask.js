import React, { Component } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addTask } from "../../actions/taskAction";

class AddTask extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      taskName: "",
      description: "",
      priority: "",
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

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    console.log("Inside on submit ");
    e.preventDefault();
    const taskToInsert = {
      id: this.state.id,
      taskName: this.state.taskName,
      description: this.state.description,
      label: this.state.label,
      dueDate: this.state.dueDate,
      status: "TO_DO",
      priority: this.state.priority,
    };
    this.props.addTask(taskToInsert, this.props.history);
  }

  render() {
    return (
      <div className="container">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="formTaskLabel">
            <Row>
              <Col className="col-md-2">
                <Form.Label className="float-right">Task Label</Form.Label>
              </Col>
              <Col className="col-md-8">
                <Form.Control
                  type="Text"
                  placeholder="Task Label"
                  className="w-50 p-3"
                  name="taskName"
                  value={this.state.taskName}
                  onChange={this.onChange}
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group controlId="formTaskDescription">
            <Row>
              <Col className="col-md-2">
                <Form.Label className="float-right">
                  Task Description
                </Form.Label>
              </Col>
              <Col className="col-md-8">
                <Form.Control
                  as="textarea"
                  rows="3"
                  placeholder="Task Description"
                  className="w-75"
                  name="description"
                  value={this.state.description}
                  onChange={this.onChange}
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group>
            <Row>
              <Col className="col-md-2">
                <Form.Label className="float-right">Task Label</Form.Label>
              </Col>
              <Col>
                <div className="form-group">
                  <select
                    className="form-control form-control-lg"
                    value={this.state.priority}
                    name="priority"
                    onChange={this.onChange}
                  >
                    <option value={0}>Select Priority</option>
                    <option value={1}>High</option>
                    <option value={2}>Medium</option>
                    <option value={3}>Low</option>
                  </select>
                </div>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group controlId="formTaskDueDate">
            <Row>
              <Col className="col-md-2">
                <Form.Label className="float-right">Task due date</Form.Label>
              </Col>
              <Col className="col-md-8">
                <Form.Control
                  type="date"
                  placeholder="Task Label"
                  className="w-25 p-3"
                  name="dueDate"
                  value={this.state.dueDate}
                  onChange={this.onChange}
                />
              </Col>
            </Row>
          </Form.Group>
          <input type="submit" className="btn btn-primary btn-block mt-4" />
        </Form>
      </div>
    );
  }
}

AddTask.propTypes = {
  task: PropTypes.object.isRequired,
  addTask: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  task: state.task.task,
});

export default connect(mapStateToProps, { addTask })(AddTask);
