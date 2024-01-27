import React from "react";
import "./Popular.css";
import dataProduct from "../Assets/dataProduct";
import Item from "../Item/Item";

function Popular() {
  return (
    <div className="popular">
      <h1>MODELE ORIGINALE PENTRU FEMEI</h1>
      <hr />
      <div className="popular-items">
        {dataProduct.map((item) => (
          <Item
            key={crypto.randomUUID()}
            id={item.id}
            name={item.name}
            images={item.images}
            newPrice={item.newPrice}
            oldPrice={item.oldPrice}
          />
        ))}
      </div>
    </div>
  );
}

export default Popular;
