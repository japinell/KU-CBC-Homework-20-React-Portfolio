//
import React, { useState } from "react";
//
function Navbar({ handlePageChange }) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav className="navBar">
      <button onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</button>
      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
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
    </nav>
  );
}

export default Navbar;
