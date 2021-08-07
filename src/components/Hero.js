import React from "react";

function Hero() {
  return (
    <div className="container-fluid splash" id="splash">
      <div className="container">
        <img
          src="https://s10.postimg.org/jvo3z5kux/QTr_B8o_S.jpg"
          alt="Portrait of Mr. Roboto"
          className="profile-image"
        />
        <h1>Chocoyo Portfolio</h1>
        <span className="lead">Rigo A. Pinell</span>
        <span className="continue">
          <a href="#about">
            <i className="fa fa-angle-down"></i>
          </a>
        </span>
      </div>
    </div>
  );
}

export default Hero;
