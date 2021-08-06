//
import React from "react";
//
// Render the navigation bar
//
function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <nav className="navbar navbar-expand-md">
        <h1 className="navbar-brand">Chocoyo Portfolio</h1>
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="nav navbar-nav">
            <li className="nav-item active">
              <a
                className="nav-link"
                href="#about"
                onClick={() => handlePageChange("About")}
              >
                About Me <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#projects"
                onClick={() => handlePageChange("Projects")}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#contact"
                onClick={() => handlePageChange("Contact")}
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="./assets/files/resume.pdf"
                target="_blank"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
