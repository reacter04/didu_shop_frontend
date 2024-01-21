import React from "react";
import "./Offers.css";
import exclusive_image from "../Assets/exclusive_image.png";

function Offers() {
  return (
    <div className="offers">
      <div className="offers-left-side">
        <h1>Oferte</h1>
        <h1>
          <strong>EXCLUSIVE</strong>
        </h1>
        <h1>pentru tine</h1>
        <p>DE LA CEI MAI RENUMITI PRODUCATORI</p>
        <button>Vezi produsele</button>
      </div>
      <div className="offers-right-side">
        <img src={exclusive_image} alt="exclusiveImage" />
      </div>
    </div>
  );
}

export default Offers;
