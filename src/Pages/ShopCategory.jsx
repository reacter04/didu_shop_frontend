import React, { useState, useContext, useMemo, useEffect } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import banner from "../Components/Assets/icons/banner.png";
import { useSearchParams } from "react-router-dom";

const numberOfAddedItems = 4;

function ShopCategory({ category }) {
  const { allProducts } = useContext(ShopContext);
  const selectedProductsByGender = allProducts.filter(
    (item) => category === item.category && item
  );

  const [loadedContent, setLoadedContent] = useState(numberOfAddedItems);
  const [filteredProducts, setFilteredProducts] = useState(
    selectedProductsByGender
  );
  const [currentDate] = useState(new Date());
  const [searchParams, setSearchParams] = useSearchParams();
  const filteredByCriterion = searchParams.get("filteredBy");

  const remainingDays = useMemo(() => {
    const untilDate = new Date("2024-02-29");
    const differenceInMilliseconds = untilDate - currentDate;
    const convertedRemainingDays = Math.ceil(
      differenceInMilliseconds / (1000 * 60 * 60 * 24)
    );
    return convertedRemainingDays;
  }, [currentDate]);

  const handleLoadMore = () => {
    loadedContent + numberOfAddedItems <= selectedProductsByGender.length
      ? setLoadedContent((prev) => prev + numberOfAddedItems)
      : setLoadedContent(() => selectedProductsByGender.length);
  };

  const handleSelectedCriterion = (e) => {
    e.preventDefault();
    const criterion = e.target.value;
    if (criterion === "default") {
      setSearchParams("");
      setFilteredProducts(selectedProductsByGender);
    } else setSearchParams({ filteredBy: `${criterion}` });
  };

  useEffect(() => {
    if (filteredByCriterion === "new-price") {
      setFilteredProducts((prev) =>
        prev.slice().sort((a, b) => a.newPrice - b.newPrice)
      );
    } else if (filteredByCriterion === "old-price") {
      setFilteredProducts((prev) =>
        prev.slice().sort((a, b) => a.oldPrice - b.oldPrice)
      );
    }
  }, [filteredByCriterion]);

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
          <span>{visibleProducts.length} </span>din{" "}
          {selectedProductsByGender.length} de produse
        </p>
        <div className="shop-category-sort">
          <label htmlFor="sortOptions">Sorteaza dupa:</label>
          <select
            onChange={(e) => handleSelectedCriterion(e)}
            id="sortOptions"
            name={filteredByCriterion}
          >
            <option value="default">Sortare implicita</option>
            <option value="new-price">Pret nou</option>
            <option value="old-price">Pret vechi</option>
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
        {loadedContent === selectedProductsByGender.length
          ? "Nu mai sunt produse"
          : "Arata mai mult"}
      </div>
    </div>
  );
}

export default ShopCategory;
