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
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
}

export default Popular;