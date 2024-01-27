import React, { useState,  useContext, useMemo } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import banner from "../Components/Assets/banner.png";

const numberOfAddedItems = 4;

function ShopCategory({ category }) {
  const { allProducts } = useContext(ShopContext);
  const selectedProducts = allProducts.filter(
    (item) => category === item.category && item
  );

  const [loadedContent, setLoadedContent] = useState(numberOfAddedItems);
  const [sortingCriterion, setSortingCriterion] = useState("default");
  const [filteredProducts, setFilteredProducts] = useState(selectedProducts);
  const [currentDate] = useState(new Date())

  const remainingDays = useMemo(() => {
    const untilDate = new Date('2024-02-29');
    const differenceInMilliseconds = untilDate - currentDate;
    const convertedRemainingDays = Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    return convertedRemainingDays;
  }, [currentDate]); 

  const handleLoadMore = () => {
    loadedContent + numberOfAddedItems <= selectedProducts.length
      ? setLoadedContent((prev) => prev + numberOfAddedItems)
      : setLoadedContent(() => selectedProducts.length);
  };

  const handleSelectedCriterion = (criterion) => {
    setSortingCriterion(criterion);
    let sortedProducts = [...filteredProducts];

    if (criterion === "default") {
      setFilteredProducts((prev) => [...prev]);
    } else if (criterion === "new price") {
      sortedProducts.sort((a, b) => a.newPrice - b.newPrice);
      setFilteredProducts(sortedProducts);
    } else if (criterion === "old price") {
      sortedProducts.sort((a, b) => a.oldPrice - b.oldPrice);
      setFilteredProducts(sortedProducts);
    }
  };

  const visibleProducts = filteredProducts.slice(0, loadedContent);

  return (
    <div className="shop-category">
      <div className="shop-category-banner">
        <div className="shop-category-banner-left-side">
          <h1>Pana la 29.02.2024</h1>
          <div className="discount-container">
            <p>Inca {remainingDays} zile</p>
            <div className="discount-account">
              <span>pana la -</span>
              <span>50%</span>
            </div>
          </div>
        </div>
        <img src={banner} alt="category" />
      </div>
      <div className="shop-category-index-sort">
        <p>
          <span>{visibleProducts.length} </span>din {selectedProducts.length} de
          produse
        </p>
        <div className="shop-category-sort">
          <label htmlFor="sortOptions">Sorteaza dupa:</label>
          <select
            onChange={(e) => handleSelectedCriterion(e.target.value)}
            id="sortOptions"
            name={sortingCriterion}
          >
            <option value="default">Sortare implicita</option>
            <option value="new price">Pret nou</option>
            <option value="old price">Pret vechi</option>
          </select>
        </div>
      </div>
      <div className="shop-category-products">
        {visibleProducts.map((item) => (
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
      <div onClick={() => handleLoadMore()} className="shopcategory-load-more">
        {loadedContent === selectedProducts.length
          ? "Nu mai sunt produse"
          : "Arata mai mult"}
      </div>
    </div>
  );
}

export default ShopCategory;
