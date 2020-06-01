import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layout/Header";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddTask from "./components/task/AddTask";
import UpdateTask from "./components/task/UpdateTask";
import { Provider } from "react-redux";
import store from "./store";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";
import Login from "./components/user/login";
import Register from "./components/user/register";
import Profile from "./components/user/profile";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/addTask" component={AddTask} />
          <Route exact path="/updateTask/:id" component={UpdateTask} />
          <NotificationContainer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
