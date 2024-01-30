import { useContext, useRef, useState, useEffect } from "react";
import React from "react";
import "./Navbar.css";
import logoul from "../Assets/icons/logo.png";
import cart_icon from "../Assets/icons/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import dropdown_icon from "../Assets/icons/nav_dropdown.png";

function Navbar() {
  const [activItemMenu, setActivItemMenu] = useState("shop");
  const { totalQuantity } = useContext(ShopContext);
  const menuRef = useRef();
  const dropdownIconRef = useRef()

  useEffect(() => {
    const handleScroll = () => {
      menuRef.current.classList.remove("nav-menu-visible");
      dropdownIconRef.current.classList.remove("open");
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const dropDownToggle = () => {
    menuRef.current.classList.toggle("nav-menu-visible");
    dropdownIconRef.current.classList.toggle("open");
  };

   const handleActiveMenu = (page)=> {
    setActivItemMenu(page)
  }

  return (
    <div className="navbar">
      <div className="nav-logo-container">
        <Link to="/">
          <div>
            <img src={logoul} alt="logoImage" />
          </div>
        </Link>
      </div>
      <div className="nav-dropdown">
        <img ref={dropdownIconRef} onClick={(e) => dropDownToggle(e)} src={dropdown_icon} alt="" />
      </div>
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => handleActiveMenu("shop")}>
          <Link to="/">Magazin</Link> {activItemMenu === "shop" && <hr />}
        </li>
        <li onClick={() => handleActiveMenu("mens")}>
          <Link to="/mens">Barbati</Link>
          {activItemMenu === "mens" && <hr />}
        </li>
        <li onClick={() => handleActiveMenu("womens")}>
          <Link to="/womens">Femei</Link>
          {activItemMenu === "womens" && <hr />}
        </li>
        <li onClick={() => handleActiveMenu("kids")}>
          <Link to="/kids">Copii</Link> {activItemMenu === "kids" && <hr />}
        </li>
      </ul>
      <div className="nav-login-cart-container">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <div className="nav-cart-count">
            <img src={cart_icon} alt="cartIcon" />
            <div>{totalQuantity}</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
