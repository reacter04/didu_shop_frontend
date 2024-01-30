import React from "react";
import "./Hero.css";
import { Link } from "react-scroll";
import hourglass_start from "../Assets/icons/hourglass_start.png";
import arrow_icon from "../Assets/icons/dropdown_icon.png";
import hero_image from "../Assets/icons/hero_image.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Articole recent adaugate</h2>
        <div>
          <div className="hero-hourglass-icon">
            <p>ACUM</p>
            <img src={hourglass_start} alt="hourglass" />
          </div>
          <p>colectii noi</p>
          <p>pentru fiecare</p>
        </div>
        <Link
          to="collection"
          spy={true}
          smooth={true}
          offset={0}
          duration={1600}
        >
          {" "}
          <div className="hero-latest-btn">
            <div>VEZI COLECTIA</div>
            <img src={arrow_icon} alt="arrowIcon" />
          </div>
        </Link>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="heroImage" />
      </div>
    </div>
  );
}

export default Hero;
