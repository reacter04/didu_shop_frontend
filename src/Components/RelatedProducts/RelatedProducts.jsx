import React from "react";
import "./RelatedProducts.css";
import recommendedProducts from "../Assets/data/recommendedProducts";
import Item from "../Item/Item";

function RelatedProducts() {
  return (
    <div className="related-products">
      <h1>Produse recomandate</h1>
      <hr />
      <div className="related-products-items">
        {recommendedProducts.map((item) => (
          <Item
            key={crypto.randomUUID()}
            id={item.id}
            name={item.name}
            images={item.images}
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
