import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteTask } from "../../actions/taskAction";
import PropTypes from "prop-types";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

class TaskCard extends Component {
  onDeleteClick = (id) => {
    confirmAlert({
      title: "Confirm",
      message: "Are you sure you want to delete this task?",
      buttons: [
        {
          label: "Yes",
          onClick: () => this.props.deleteTask(id),
        },
        {
          label: "No",
        },
      ],
    });
  };

  render() {
    const { task } = this.props;
    return (
      <div className="card mb-1 bg-light">
        <div className="closebuttonpanel">
          <button
            type="button"
            class="close pull-right red"
            aria-label="Close"
            onClick={this.onDeleteClick.bind(this, task.id)}
          >
            <h3>
              <span
                aria-hidden="true"
                className="fa fa-times closebuttonspan"
              ></span>
            </h3>
          </button>
        </div>
        <div class="card-header">
          <h4 className=" text-primary">{task.taskName}</h4>
        </div>
        <div className="card-body bg-light">
          <h4 className="card-text">{task.description}</h4>
          <p className="card-text">Due in _____ Days</p>
        </div>
        <Link to={`/updateTask/${task.id}`} className="btn btn-primary">
          View / Update
        </Link>
      </div>
    );
  }
}

TaskCard.propTypes = {
  deleteTask: PropTypes.func.isRequired,
};

export default connect(null, { deleteTask })(TaskCard);
