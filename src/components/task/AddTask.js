import React, { Component } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

class AddTask extends Component {
  render() {
    return (
      <div className="container">
        <Form>
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
                />
              </Col>
            </Row>
          </Form.Group>
          <fieldset>
            <Form.Group>
              <Row>
                <Col className="col-md-2">
                  <Form.Label className="float-right">Task priority</Form.Label>
                </Col>
                <Col className="col-md-8">
                  <Row>
                    <Col>
                      <Row>
                        &nbsp;&nbsp;&nbsp;
                        <Form.Check
                          type="radio"
                          label="Low"
                          name="formTaskPriority"
                          id="formTaskPriorityLow"
                        />
                        &nbsp;&nbsp;
                        <Form.Check
                          type="radio"
                          label="Moderate"
                          name="formTaskPriority"
                          id="formTaskPriorityModerate"
                        />
                        &nbsp;&nbsp;
                        <Form.Check
                          type="radio"
                          label="High"
                          name="formTaskPriority"
                          id="formTaskPriorityHigh"
                        />
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form.Group>
          </fieldset>
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
                />
              </Col>
            </Row>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddTask;
