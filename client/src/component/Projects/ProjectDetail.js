import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import ProjAction from "./ActionsList";

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
    console.log( this.state.projectDetails);


    const { id } = this.props.match.params;

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
                {/* { this.state.projectDetails.actions.map(eachAction => (
                  <Link
                    key={eachAction.id}
                    to={`/api/projects/${id}/${eachAction.id}/`}
                  >
                    <ProjAction projAct={eachAction} />
                  </Link>
                ))} */}
              </ul>
            </div>
          </h3>
        </div>
      </div>
    );
  }
}
