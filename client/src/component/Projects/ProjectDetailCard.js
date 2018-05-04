import React from "react";
import { Link } from "react-router-dom";

const ProjectDetailCard = props => {

  console.log(props.project)
  return (
    <div className="projectName">
        <h1>Project: </h1>
        <h3>Name: {props.project.name}</h3>
        <div className="projectDetailList">
          <h3>Description: {props.project.description}</h3>
          <h3>Completed: {props.project.completed ? "Yes" : "No"}</h3>
          <h3>
            Actions:
            <div>
              <ul>
                {/* { props.project.actions.map(eachAction => (
                  <Link
                    key={eachAction.id}
                    to={`/api/projects/${props.project.id}/${eachAction.id}/`}
                  >
                    <h3>Action Description: {eachAction.description}</h3>
                    <h3>Action Notes: {eachAction.notes}</h3>
                    <h3>Action completed: {eachAction.completed ? "Yes" : "No"}</h3>
                  </Link>
                ))} */}
              </ul>
            </div>
          </h3>
        </div>
      </div>
  );
}
export default ProjectDetailCard;
