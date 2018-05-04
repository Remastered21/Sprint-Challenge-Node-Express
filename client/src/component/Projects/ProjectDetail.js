import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import ProjectDetailCard from "./ProjectDetailCard"

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

    // console.log(this.state.projectDetails);

    return (
      <div className="projectContainer">
        <div className="projectDetail">
          <Link to={`/api/projects/${id}/actions`}>
            <ProjectDetailCard project={projectContent} />
          </Link>
        </div>
      </div>
    );
  }
}
