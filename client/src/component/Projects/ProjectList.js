import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import ProjectCard from './ProjectCard'

export default class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/projects")
      .then(response => {
        this.setState(() => ({ projects: response.data }));
      })
      .catch(err => {
        console.error("server Error", err);
      });
  }

  render() {
    console.log(this.state.projects);
    return (
      <div className="projectHeader">
        <h1>Projects Available:</h1>
        <div className="projectList">
          {this.state.projects.map(eachProject => (
            <Link key={eachProject.id} to={`/api/project/${eachProject.id}`}>
              {/* <h2>Something random for now {eachProject.id}</h2> */}
              <ProjectCard project={eachProject} />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
