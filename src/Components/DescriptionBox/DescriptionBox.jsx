import { useState } from "react";
import React from "react";
import "./DescriptionBox.css";
import TextExpander from "../ReusableComponents/TextExpander/TextExpander";

function DescriptionBox({ product }) {
  const [activeBox, setActiveBox] = useState("description");

  const handleSelectedBox = (box) => {
    setActiveBox(box);
  };

  return (
    <div className="description-box">
      <div className="description-box-navigator">
        <div
          onClick={(e) => handleSelectedBox("description")}
          className={`description-box-nav-box ${
            activeBox === "description" ? "fade" : ""
          }`}
        >
          Descriere
        </div>
        <div
          onClick={(e) => handleSelectedBox("ratings")}
          className={`description-box-nav-box ${
            activeBox === "ratings" ? "fade" : ""
          }`}
        >
          Recenzii {/* aici trebuie sa pun numarul real de recenzii*/}
        </div>
      </div>
      <div className="description-box-description">
       {activeBox === "description" ? <p>
          <TextExpander>{product.allDescription}</TextExpander>
        </p> : <p>Nu sunt recenzii la acest produs</p>} 
      </div>
    </div>
  );
}

export default DescriptionBox;
