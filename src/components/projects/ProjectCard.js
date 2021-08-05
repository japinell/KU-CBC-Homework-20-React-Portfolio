import React from "react";
//import { Link } from "react-router-dom";

function ProjectCard({ projects }) {
  return (
    <div className="card mb-3" id="myProjects">
      {projects.map((project) => (
        <div className="row col-12 no-gutters" key={project.id}>
          <div className="col-md-6">
            <div className="card-header card-custom">
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                <img
                  className="card-img"
                  src={project.image}
                  alt={project.shortTitle}
                  width="50%"
                />
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card-body text-justify">
              <div className="text-center">
                <strong>{project.longTitle}</strong>
              </div>
              {project.description.map((paragraph, index) => (
                <p className="card-text" key={index}>
                  {paragraph}
                </p>
              ))}
              <p className="card-text">
                Check out the live application in{" "}
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  {project.liveServer}
                </a>
                , and the code in{" "}
                <a href={project.gitHubRepo} target="_blank" rel="noreferrer">
                  GitHub Repository
                </a>
                .
              </p>
              <p className="card-text">
                The application uses the following technologies:
              </p>
              <ul className="d-flex flex-row justify-content-around list-group list-group-horizontal">
                {project.technologies.map((technology, index) => (
                  <li key={index}>
                    <span className="badge badge-secondary p-2">
                      {technology}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectCard;
