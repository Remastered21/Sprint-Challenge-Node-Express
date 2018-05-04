import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default class ProjectDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectDetails: [],
      DoNotShowAction: true
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
    console.log(this.state);
    const projectContent = this.state.projectDetails;
    return (
      <div className="projectName">
        <h1>Project: </h1>
        <h3>Name: {projectContent.name}</h3>
        <div className="projectDetailList">
          <h3>Description: {projectContent.description}</h3>
          <h3>Completed: {projectContent.completed ? "Yes" : "No"}</h3>
          <h3>
            Actions:{" "}
            {this.state.DoNotShowAction ? null : (
              <div>
                {projectContent.actions.map(eachAction => (
                  // <Link
                  //   key={eachAction.id}
                  //   to={`/api/projects/:id/${EachAction.id}/`}
                  // >
                    {/* <ProjectCard project={eachProject} /> */}
                  // </Link>
                ))}{" "}
              </div>
            )}
          </h3>
        </div>
      </div>
    );
  }
}
