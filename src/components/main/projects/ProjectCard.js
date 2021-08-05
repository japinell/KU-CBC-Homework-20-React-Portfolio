import React from "react";
//import { Link } from "react-router-dom";

function ProjectCard({ projects }) {
  return (
    <div className="card mb-3" id="myProjects">
      {projects.map((project) => (
        <div className="row col-12 no-gutters" key={project.id}>
          <div className="col-md-6">
            <div className="card-header card-custom">
              <a href={project.projectLink}>
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
                Check out the live application in
                <a href="https://japinell.github.io/KU-CBC-Project-1-Delivery-Done-Right/">
                  GitHub Pages
                </a>
                , and the code in
                <a href="https://github.com/japinell/KU-CBC-Project-1-Delivery-Done-Right">
                  GitHub Repository
                </a>
                .
              </p>
              <p className="card-text">
                The application uses the following technologies:
              </p>
              <ul className="d-flex flex-row justify-content-around list-group list-group-horizontal">
                <li>
                  <span className="badge badge-secondary p-2">HTML</span>
                </li>
                <li>
                  <span className="badge badge-secondary p-2">CSS</span>
                </li>
                <li>
                  <span className="badge badge-secondary p-2">JavaScript</span>
                </li>
                <li>
                  <span className="badge badge-secondary p-2">BootStrap</span>
                </li>
                <li>
                  <span className="badge badge-secondary p-2">JQuery</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectCard;
