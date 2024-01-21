import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png"

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Articole recent adaugate</h2>
        <div>
          <div className="hero-hend-icon">
            <p>ACUM</p>
            <img src={hand_icon} alt="handIcon" />
          </div>

          <p>colectii noi</p>
          <p>pentru fiecare</p>
        </div>
        <div className="hero-latest-btn">
          <div>VEZI COLECTIA</div>
          <img src={arrow_icon} alt="arrowIcon" />
        </div>
      </div>
      <div className="hero-right">
         <img src={hero_image} alt="heroImage" />
      </div>
    </div>
  );
}

export default Hero;
