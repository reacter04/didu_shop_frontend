import React, { useState, useContext } from "react";
import "./RelatedProducts.css";
import Item from "../Item/Item";
import { ShopContext } from "../../Context/ShopContext";

function RelatedProducts({ product }) {
  const { allProducts } = useContext(ShopContext);
  const [relatedProductsWithoutCurrentItem] = useState(
    allProducts
      .filter(
        (item) => product.category === item.category && product.id !== item.id
      )
      .sort(() => Math.random() - 0.5)
      .slice(0, 4)
  );

  return (
    <div className="related-products">
      <h1>Produse recomandate</h1>
      <hr />
      <div className="related-products-items">
        {relatedProductsWithoutCurrentItem.map((item) => (
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
