import React from "react";
import "./Hero.css";
import { Link } from "react-scroll";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/dropdown_icon.png";
import hero_image from "../Assets/hero_image.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Articole recent adaugate</h2>
        <div>
          <div onClick={() => console.log(2)} className="hero-hend-icon">
            <p>ACUM</p>
            <img src={hand_icon} alt="handIcon" />
          </div>
          <p>colectii noi</p>
          <p>pentru fiecare</p>
        </div>
        <Link
          to="collection"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
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
