import React, { useState, useContext, useEffect } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";
import StarRating from "../ReusableComponents/StarRating/StarRating";

function ProductDisplay({ product }) {
  const {
    handleAddToCart,
    handleSelectedSize,
    activeSize,
    setActiveSize,
    votes,
  } = useContext(ShopContext);

  const isVotedEarly = votes.find((_, index) => index + 1 === product.id).voted;

  const [buttonText, setButtonText] = useState("Adauga");
  const [isAdded, setIsAdded] = useState(false);

  const handleEffectsOnClickAdd = () => {
    if (activeSize) {
      setButtonText("Adaugat");
      setIsAdded(true);
      setTimeout(() => {
        setButtonText("Adauga");
        setIsAdded(false);
      }, 300);
    }
  };

  useEffect(() => {
    setActiveSize("");
  }, [setActiveSize]);

  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="product-display-img">
          <img
            className="product-display-basic-img"
            src={product.image}
            alt=""
          />
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-display-right-stars">
          <StarRating productId={product.id} />
          <span>
            /<strong>{product.rating}</strong> din{" "}
            {!isVotedEarly ? product.votes : product.votes + 1} de recenzii/
          </span>
        </div>
        <div className="product-display-right-prices">
          <div className="product-display-right-price-old">
            {product.oldPrice} lei
          </div>
          <div className="product-display-right-price-new">
            {product.newPrice} lei
          </div>
        </div>
        <div className="product-display-right-description">
          {product.shortDescription}
          <div className="product-display-right-size">
            <h1>Select size:</h1>
            <div className="product-display-right-sizes">
              <div
                onClick={() => handleSelectedSize("s")}
                className={activeSize === "s" ? "active-size" : ""}
              >
                S
              </div>
              <div
                onClick={() => handleSelectedSize("m")}
                className={activeSize === "m" ? "active-size" : ""}
              >
                M
              </div>
              <div
                onClick={() => handleSelectedSize("l")}
                className={activeSize === "l" ? "active-size" : ""}
              >
                L
              </div>
              <div
                onClick={() => handleSelectedSize("xl")}
                className={activeSize === "xl" ? "active-size" : ""}
              >
                XL
              </div>
              <div
                onClick={() => handleSelectedSize("xxl")}
                className={activeSize === "xxl" ? "active-size" : ""}
              >
                XXL
              </div>
            </div>
          </div>
          <div className="add-to-cart-container">
            <button
              className={`add-to-cart-btn ${isAdded ? "product-added" : ""}`}
              onClick={() => {
                handleAddToCart(product.id);
                handleEffectsOnClickAdd();
              }}
            >
              {buttonText}
              {!activeSize && (
                <span className="add-to-cart-info">Alege marimea</span>
              )}
            </button>
          </div>
          <p className="product-display-right-category">
            <span>Categoria: </span>Femeie, Bluza, Scurta
          </p>
          <p className="product-display-right-category">
            <span>Taguri: </span>modern, original, nou
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
