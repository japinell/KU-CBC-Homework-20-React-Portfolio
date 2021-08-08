//
import React from "react";
//
//  Render the footer component
//
function Footer({ handlePageChange }) {
  return (
    <footer className="container-fluid footer">
      <div className="container">
        <a
          href="https://www.linkedin.com/in/japinell/"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <i className="fab fa-linkedin-square" aria-hidden="true"></i>
        </a>
        <a
          href="https://github.com/japinell"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <i className="fab fa-github-square" aria-hidden="true"></i>
        </a>
        <a
          href="https://twitter.com/japinell"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <i className="fab fa-twitter-square" aria-hidden="true"></i>
        </a>
        <a href="#contact" onClick={() => handlePageChange("Contact")}>
          <i className="far fa-envelope"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
