import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Route } from "react-router-dom";

import Home from "./component/Home";
import ProjectList from "./component/Projects/ProjectList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Route exact path="/" component={Home} />
        <Route path="/api/projects" component={ProjectList} />
      </div>
    );
  }
}

export default App;
