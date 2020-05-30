import React, { Component } from "react";
import { Link } from "react-router-dom";

class TaskList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div class="col-md-4">
            <div class="card text-center mb-2">
              <div class="card-header bg-secondary text-white">
                <h3>TO DO</h3>
              </div>
            </div>
            <div class="card mb-1 bg-light">
              <div class="card-header text-primary">
                Task ID & label with Priority
              </div>
              <div class="card-body bg-light">
                <h5 class="card-title">Description</h5>
                <Link to="/updateTask" class="btn btn-primary">
                  View / Update
                </Link>
                <button class="btn btn-danger ml-4">Delete</button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card text-center mb-2">
              <div class="card-header bg-secondary text-white">
                <h3>In Progress</h3>
              </div>
            </div>
            <div class="card mb-1 bg-light">
              <div class="card-header text-primary">
                Task ID & label with Priority
              </div>
              <div class="card-body bg-light">
                <h5 class="card-title">Description</h5>
                <a href="" class="btn btn-primary">
                  View / Update
                </a>
                <button class="btn btn-danger ml-4">Delete</button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card text-center mb-2">
              <div class="card-header bg-secondary text-white">
                <h3>Done</h3>
              </div>
            </div>
            <div class="card mb-1 bg-light">
              <div class="card-header text-primary">
                Task ID & label with Priority
              </div>
              <div class="card-body bg-light">
                <h5 class="card-title">Description</h5>
                <a href="" class="btn btn-primary">
                  View / Update
                </a>
                <button class="btn btn-danger ml-4">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskList;
