import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <h1>Hi, Welcome to Task Mangement Tool</h1>
        <br />
        <hr />
        <h2>!!! Manage your task efficiently here !!!</h2>
        <br />
        <Link to="/dashboard" className="btn btn-primary">
          Go to your Personalised Task Dashboard
        </Link>
      </div>
    );
  }
}
