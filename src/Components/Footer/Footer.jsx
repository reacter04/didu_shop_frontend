import React from "react";
import "./Footer.css";
import footerLogo from "../Assets/logo_big.png";
import instaIcon from "../Assets/instagram_icon.png";
import pinterestIcon from "../Assets/pintester_icon.png";
import wattsupIcon from "../Assets/whatsapp_icon.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footerLogo} alt="footerLogo" />
        <p>DIDU</p>
      </div>
      <ul className="footer-links">
        <li>Compania</li>
        <li>Articole</li>
        <li>Filiale</li>
        <li>Despre </li>
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
