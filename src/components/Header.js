//
import React from "react";
//
// Render the navigation bar
//
function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <nav className="container-fluid nav">
        <div className="container cf">
          <div className="brand">
            <a href="#splash">Chocoyo Portfolio</a>
          </div>
          <i className="fa fa-bars nav-toggle"></i>
          <ul>
            <li>
              <a href="/" onClick={() => handlePageChange("Home")}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => handlePageChange("About")}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => handlePageChange("Projects")}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => handlePageChange("Contact")}>
                Contact
              </a>
            </li>
            <li>
              <a href="#skills">Resume</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
