//
import React, { useState } from "react";
//
// Render the navigation bar
//
const styles = {
  show: {
    display: "block",
  },
  hide: {
    display: "none",
  },
};
//
function Header({ handlePageChange }) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <div>
      <nav className="container-fluid nav">
        <div className="container custom-container-fluid">
          <div className="brand">
            <a href="#splash">Chocoyo Portfolio</a>
          </div>
          <i className="fa fa-bars nav-toggle" onClick={handleToggle}></i>
          <ul style={navbarOpen ? styles.show : styles.hide}>
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
    </div>
  );
}

export default Header;
