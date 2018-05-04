import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import ProjectDetailCard from "./ProjectDetailCard";

export default class ProjectDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectDetails: []
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.fetchProjDetails(id);
  }

  fetchProjDetails = id => {
    axios
      .get(`http://localhost:5000/api/projects/${id}`)
      .then(response => {
        this.setState(() => ({ projectDetails: response.data }));
      })
      .catch(err => {
        console.error("server Error", err);
      });
  };

  render() {
    const projectContent = this.state.projectDetails;
    const { id } = this.props.match.params;
    // console.log(this.state.projectDetails.actions[0]);

    if (this.state.projectDetails.actions !== undefined) {
      console.log(this.state.projectDetails.actions[0]);
      return (
        <div className="projectName">
          <h1>Project: </h1>
          <div>Name: {projectContent.name}</div>
          <div className="projectDetailList">
            <div>Description: {projectContent.description}</div>
            <div>Completed: {projectContent.completed ? "Yes" : "No"}</div>
            <div>
              Actions:
              <div>
                <ul>
                  {projectContent.actions.map(eachAction => (
                    <Link
                      key={eachAction.id}
                      to={`/api/projects/${projectContent.id}/actions/${
                        eachAction.id
                      }/`}
                    >
                      <h3>Action Description: {eachAction.description}</h3>
                      <h3>Action Notes: {eachAction.notes}</h3>
                      <h3>
                        Action completed: {eachAction.completed ? "Yes" : "No"}
                      </h3>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
