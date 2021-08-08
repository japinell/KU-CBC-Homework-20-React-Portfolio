//
import React from "react";
import "../assets/css/projects.css";
//
// Render the projects in a carousel
//
function Projects({ projects, handlePageChange }) {
  return (
    <section id="focus" className="focus-section">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {projects.map((project) => (
          <div className="col" key={project.id}>
            <div className="card shadow-sm h-100">
              <div className="text-img-over">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.shortTitle}
                />
                <div className="overlay">
                  <div className="social-hover">
                    <a
                      href="https://www.linkedin.com/in/japinell/"
                      target="_blank"
                      rel="noreferrer"
                      className="social-icon"
                    >
                      <i
                        className="fab fa-linkedin-square"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="https://github.com/japinell"
                      target="_blank"
                      rel="noreferrer"
                      className="social-icon"
                    >
                      <i
                        className="fab fa-github-square"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="https://twitter.com/japinell"
                      target="_blank"
                      rel="noreferrer"
                      className="social-icon"
                    >
                      <i
                        className="fab fa-twitter-square"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="#contact"
                      onClick={() => handlePageChange("Contact")}
                    >
                      <i className="far fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <h3 className="card-title">{project.longTitle}</h3>
                <div className="text-left my-2">
                  <div className="sub-cat text-truncate">
                    {project.technologies.map((technology) => (
                      <span
                        className="badge rounded-pill bg-category"
                        key={technology}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="card-text">{project.description[0]}</p>
              </div>
              <div className="card-footer py-3">
                <div className="card-footer__info">
                  <span>
                    <a
                      className="text-uppercase read-more-1"
                      href={project.gitHubRepo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub Repo
                    </a>
                  </span>
                  <span className="read-more">
                    <a
                      className="text-uppercase read-more-1"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Application
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
    </section>
    // <div className="container-fluid portfolio" id="portfolio">
    //   <div className="container cf">
    //     <h2>Projects</h2>
    //     <div className="gallery">
    //       {projects.map((project) => (
    //         <div className="gallery-image">
    //           <a href={project.liveUrl} target="_blank" rel="noreferrer">
    //             <img
    //               className="card-img"
    //               src={project.image}
    //               alt={project.shortTitle}
    //               width="50%"
    //             />
    //           </a>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
}

export default Projects;
