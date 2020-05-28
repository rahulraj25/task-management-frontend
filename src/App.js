import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layout/Header";
import Dashboard from "./components/Dashboard";
import Rahul from "./components/layout/Rahul";
import Gaurav from "./components/layout/gaurav";

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <Rahul />
      <Gaurav />
    </div>
  );
}

export default App;
