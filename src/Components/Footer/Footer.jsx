import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../Assets/icons/logo.png";
import instaIcon from "../Assets/icons/instagram_icon.png";
import pinterestIcon from "../Assets/icons/pintester_icon.png";
import wattsupIcon from "../Assets/icons/whatsapp_icon.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <Link to={"/"}>
          <img
            onClick={()=>window.scrollTo(0, 0)}
            src={logo}
            alt="footerLogo"
          />
        </Link>
      </div>
      <ul className="footer-links">
        <li>Despre noi</li>
        <li>Articole</li>
        <li>Filiale</li>
        <li>Contactazeaza-ne</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instaIcon} alt="instagram" />
        </div>
        <div className="footer-icons-container">
          <img src={pinterestIcon} alt="pinterest" />
        </div>
        <div className="footer-icons-container">
          <img src={wattsupIcon} alt="wattsup" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </div>
    </div>
  );
}

export default Footer;
