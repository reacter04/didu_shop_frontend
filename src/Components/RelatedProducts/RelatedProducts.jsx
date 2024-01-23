import React from "react";
import "./RelatedProducts.css";
import dataProducts from "../Assets/dataProduct";
import Item from "../Item/Item";

function RelatedProducts() {
  return (
    <div className="related-products">
      <h1>Produse asemanatoare</h1>
      <hr />
      <div className="related-products-items">
        {dataProducts.map((item) => (
          <Item
            key={crypto.randomUUID()}
            id={item.id}
            name={item.name}
            image={item.image}
            newPrice={item.newPrice}
            oldPrice={item.oldPrice}
            relatedItems={true}
          />
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
