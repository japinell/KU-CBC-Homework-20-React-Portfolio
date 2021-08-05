import React from "react";

function Footer() {
  return (
    <footer className="p-3" id="contact">
      {/* Logo */}
      <h1 className="display-4">Contact Me</h1>
      <p className="card-text">
        Interested in knowing more about the <em>future</em> projects I will be
        building? Want to connect, follow, or contact me to know more about my
        professional career? Contact me through any of the following means:
      </p>
      {/* End of Logo */}
      {/* Navigation */}
      <nav>
        {/* Links */}
        <div className="content">
          <a href="/" target="_blank" rel="noreferrer" className="phone">
            {" "}
            1-NOT-DIS-CLOSED{" "}
          </a>
          <a
            href="mailto:japinell@yahoo.com"
            target="_blank"
            rel="noreferrer"
            className="email"
          >
            japinell@yahoo.com
          </a>
          <a
            href="https://www.linkedin.com/in/japinell/"
            target="_blank"
            rel="noreferrer"
            className="linkedin"
          >
            https://www.linkedin.com/in/japinell/
          </a>
          <a
            href="https://github.com/japinell"
            target="_blank"
            rel="noreferrer"
            className="github"
          >
            https://github.com/japinell
          </a>
          <a
            href="https://twitter.com/japinell"
            target="_blank"
            rel="noreferrer"
            className="twitter"
          >
            https://twitter.com/japinell
          </a>
          <a
            href="https://spotify.com/japinell"
            target="_blank"
            rel="noreferrer"
            className="spotify"
          >
            https://spotify.com/japinell
          </a>
        </div>
        {/* End of Links */}
      </nav>
      {/* End of Navigation */}
    </footer>
  );
}

export default Footer;
