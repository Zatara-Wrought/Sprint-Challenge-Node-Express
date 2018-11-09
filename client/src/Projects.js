import React from "react";

const Projects = props => {
  return (
    <div>
      {props.projects.map(project => {
        return (
          <div key={project.id}>
            <p>Name: {project.name}</p>
            <p>Description: {project.description}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Projects;
