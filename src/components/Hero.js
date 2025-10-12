import React from "react";
import bg3 from "../asset/bg3.jpg";
import mypic from "../asset/mypic.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(248, 3, 3, 0.4), rgba(46, 6, 246, 0.4)), url(${bg3})`,
      }}
    >
      <div className="hero-content">
        <div className="hero-image">
          <img src={mypic} alt="Devendra" />
          <h3 className="hero-name">|DEVENDRA GHADGE|</h3>
        </div>
        <div className="hero-text">
          <h1>Hi, I'm a TechieDev 👋</h1>
          <p>
            Welcome to my personal website.<br />
            Get to know me more by exploring this page.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
