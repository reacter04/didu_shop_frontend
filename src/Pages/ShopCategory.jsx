import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

function ShopCategory({ banner, category }) {
  const { allProducts } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img className="shop-category-banner" src={banner} alt="" />
      <div className="shop-category-index-sort">
        <p>
          <span>Arata 1-12 </span>din {allProducts.length} de produse
        </p>
        <div className="shop-category-sort">
          Soreaza dupa <img src={dropdown_icon} alt="dropIcon" />
        </div>
      </div>
      <div className="shop-category-products">
        {allProducts.map((item) => {
          if (category === item.category) {
            return (
              <Item
                key={crypto.randomUUID()}
                id={item.id}
                name={item.name}
                image={item.image}
                newPrice={item.newPrice}
                oldPrice={item.oldPrice}
              />
            );
          } else return null;
        })}
      </div>
      <div className="shopcategory-load-more">Arata mai mult</div>
    </div>
  );
}

export default ShopCategory;
