//
import React from "react";
import "../assets/css/projects.css";
//
// Render the projects in a carousel
//
function ProjectCarousel({ projects }) {
  return (
    <section id="focus" className="focus-section">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {projects.map((project) => (
          <div className="col" key={project.id}>
            <div className="card shadow-sm h-100">
              <div className="card-image">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.shortTitle}
                />
                <div className="image-overlay"></div>
              </div>

              <div className="card-body">
                <h3 className="card-title">{project.longTitle}</h3>
                <div className="text-left my-2">
                  <div className="sub-cat text-truncate">
                    {project.technologies.map((technology) => (
                      <span
                        className="badge rounded-pill bg-category text-uppercase"
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

export default ProjectCarousel;
