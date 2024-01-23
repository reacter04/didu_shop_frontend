import React, { useState, useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";

const numberOfAddedItems = 4;

function ShopCategory({ banner, category }) {
  const { allProducts } = useContext(ShopContext);
  const selectedProducts = allProducts.filter(
    (item) => category === item.category && item
  );
  const [loadedContent, setLoadedContent] = useState(numberOfAddedItems);
  const visibleProducts = selectedProducts.slice(0, loadedContent);
  const [sortingCriterion, setSortingCriterion] = useState("default");
  const [filteredProducts, setFilteredProducts] = useState(visibleProducts);

  const handleLoadMore = () => {
    loadedContent + numberOfAddedItems <= selectedProducts.length
      ? setLoadedContent((prev) => prev + numberOfAddedItems)
      : setLoadedContent(() => selectedProducts.length);
  };


  const handleSelectedCriterion = (criterion) => {
    setSortingCriterion(criterion);
    let sortedProducts = [...visibleProducts];
  
    if (criterion === "default") {
      setFilteredProducts(sortedProducts);
    } else if (criterion === "new price") {
      sortedProducts.sort((a, b) => a.newPrice - b.newPrice);
      setFilteredProducts(sortedProducts);
    } else if (criterion === "old price") {
      sortedProducts.sort((a, b) => a.oldPrice - b.oldPrice);
      setFilteredProducts(sortedProducts);
    }
  };
  

 console.log(filteredProducts)


  return (
    <div className="shop-category">
      <img className="shop-category-banner" src={banner} alt="" />
      <div className="shop-category-index-sort">
        <p>
          <span>{filteredProducts.length} </span>din {selectedProducts.length} de
          produse
        </p>
        <div className="shop-category-sort">
          <label htmlFor="sortOptions">Sorteaza dupa:</label>
          <select onChange={(e)=>handleSelectedCriterion(e.target.value)} name={sortingCriterion}>
            <option value="default">Sortare implicita</option>
            <option value="new price">Pret nou</option>
            <option value="old price">Pret vechi</option>
          </select>
        </div>
      </div>
      <div className="shop-category-products">
        {filteredProducts.map((item) => (
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
        {loadedContent === selectedProducts.length
          ? "Nu mai sunt produse"
          : "Arata mai mult"}
      </div>
    </div>
  );
}

export default ShopCategory;
