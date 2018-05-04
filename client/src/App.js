import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Route } from "react-router-dom";

import Home from "./component/Home";
import ProjectList from "./component/Projects/ProjectList";
import ProjectDetail from "./component/Projects/ProjectDetail";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Route exact path="/" component={Home} />
        <Route exact path="/api/projects" component={ProjectList} />
        <Route path="/api/projects/:id" component={ProjectDetail} />
      </div>
    );
  }
}

export default App;
