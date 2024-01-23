import React, { useState, useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const numberOfAddedItems = 4;

function ShopCategory({ banner, category }) {
  const { allProducts } = useContext(ShopContext);
  const selectedProducts = allProducts.filter(
    (item) => category === item.category && item
  );


  const [loadedContent, setLoadedContent] = useState(numberOfAddedItems);

  
  const visibleProducts = selectedProducts.slice(0, loadedContent);

  const handleLoadMore = () => {
    loadedContent + numberOfAddedItems <= selectedProducts.length
      ? setLoadedContent((prev) => prev + numberOfAddedItems)
      : setLoadedContent(() => selectedProducts.length);
  }

  return (
    <div className="shop-category">
      <img className="shop-category-banner" src={banner} alt="" />
      <div className="shop-category-index-sort">
        <p>
          <span>{visibleProducts.length} </span>din {selectedProducts.length} de
          produse
        </p>
        <div className="shop-category-sort">
          Soreaza dupa <img src={dropdown_icon} alt="dropIcon" />
        </div>
      </div>
      <div className="shop-category-products">
        {visibleProducts.map((item) => (
          <Item
            key={crypto.randomUUID()}
            id={item.id}
            name={item.name}
            image={item.image}
            newPrice={item.newPrice}
            oldPrice={item.oldPrice}
          />
        ))}
      </div>
      <div onClick={handleLoadMore} className="shopcategory-load-more">
        {loadedContent === selectedProducts.length? "Nu mai sunt produse" : "Arata mai mult"}
      </div>
    </div>
  );
}

export default ShopCategory;
