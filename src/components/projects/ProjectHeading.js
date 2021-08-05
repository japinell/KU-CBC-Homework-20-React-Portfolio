import React from "react";

function ProjectHeading() {
  return (
    <h1 className="display-4">
      My Projects
      <button
        className="btn btn-warning"
        type="button"
        data-toggle="collapse"
        data-target="#myProjects"
        aria-expanded="false"
        aria-controls="myProjects"
        id="showMyProjects"
      >
        <i
          className="fas fa-chevron-up"
          aria-hidden="true"
          id="showMyProjectsIcon"
        ></i>
      </button>
    </h1>
  );
}

export default ProjectHeading;
