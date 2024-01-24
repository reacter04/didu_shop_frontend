import React, { useEffect } from "react";
import "./Offers.css";
import exclusive_image from "../Assets/exclusive_image.png";
import { Link } from "react-router-dom";

function Offers() {
  
  useEffect(() => {
    return () => window.scrollTo(0, 0);
  }, []);

  return (
    <div className="offers">
      <div className="offers-left-side">
        <h1>Oferte</h1>
        <h1>
          <strong>EXCLUSIVE</strong>
        </h1>
        <h1>pentru femei</h1>
        <p>DE LA CEI MAI RENUMITI PRODUCATORI</p>
        <Link to="/womens">
          <button>Vezi produsele</button>
        </Link>
      </div>
      <div className="offers-right-side">
        <img src={exclusive_image} alt="exclusiveImage" />
      </div>
    </div>
  );
}

export default Offers;
