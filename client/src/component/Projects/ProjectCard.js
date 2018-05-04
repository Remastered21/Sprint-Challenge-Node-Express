import React from "react";

const ProjectCard = props => {
  return (
    <div className="projectCard">
      <h2>{props.project.name}</h2>
      <div className="projectDescription">
        Description: {props.project.description}
      </div>
    </div>
  );
};

export default ProjectCard;
