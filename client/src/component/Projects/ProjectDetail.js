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

    if (this.state.projectDetails.actions !== undefined) {
      console.log(this.state.projectDetails.actions[0]);
      return (
        <div className="projectName">
          <h1>Project: </h1>
          <h3>Name: {projectContent.name}</h3>
          <div className="projectDetailList">
            <h3>Description: {projectContent.description}</h3>
            <h3>Completed: {projectContent.completed ? "Yes" : "No"}</h3>
            <h3>
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
                      <div className="ActionCard">
                        <h6>Action Description: {eachAction.description}</h6>
                        <h6>Action Notes: {eachAction.notes}</h6>
                        <h6>
                          Action completed:{" "}
                          {eachAction.completed ? "Yes" : "No"}
                        </h6>
                      </div>
                    </Link>
                  ))}
                </ul>
              </div>
            </h3>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
