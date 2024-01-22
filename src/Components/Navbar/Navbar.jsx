import { useContext, useRef, useState } from "react";
import React from "react";
import "./Navbar.css";
import logoul from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import dropdown_icon from "../Assets/nav_dropdown.png";

function Navbar() {
  const [activItemMenu, setActivItemMenu] = useState("shop");
  const { totalQuantity } = useContext(ShopContext);
  const menuRef = useRef();
  
  const dropDownToggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <div className="nav-logo-container">
        <Link to="/">
          <img src={logoul} alt="logoImage" />
        </Link>
        <Link to="/">
          <span>DIDU</span>
        </Link>
      </div>
      <img
        className="nav-dropdown"
        onClick={(e) => dropDownToggle(e)}
        src={dropdown_icon}
        alt=""
      />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => setActivItemMenu("shop")}>
          <Link to="/">Magazin</Link> {activItemMenu === "shop" && <hr />}
        </li>
        <li onClick={() => setActivItemMenu("mens")}>
          <Link to="/mens">Barbati</Link>
          {activItemMenu === "mens" && <hr />}
        </li>
        <li onClick={() => setActivItemMenu("womens")}>
          <Link to="/womens">Femei</Link>
          {activItemMenu === "womens" && <hr />}
        </li>
        <li onClick={() => setActivItemMenu("kids")}>
          <Link to="/kids">Copii</Link> {activItemMenu === "kids" && <hr />}
        </li>
      </ul>
      <div className="nav-login-cart-container">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="cartIcon" />
          <div className="nav-cart-count">{totalQuantity}</div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
