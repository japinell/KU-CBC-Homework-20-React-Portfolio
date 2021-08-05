import React from "react";

function AboutHeading() {
  return (
    <h1 className="display-4">
      About Me
      <button
        className="btn btn-warning"
        type="button"
        data-toggle="collapse"
        data-target="#aboutMe"
        aria-expanded="false"
        aria-controls="aboutMe"
        id="showAboutMe"
      >
        <i
          className="fas fa-chevron-up"
          aria-hidden="true"
          id="showAboutMeIcon"
        ></i>
      </button>
    </h1>
  );
}

export default AboutHeading;
