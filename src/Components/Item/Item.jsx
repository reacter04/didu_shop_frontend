import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";
import { animateScroll } from "react-scroll";

function Item({ id, name, image, newPrice, oldPrice, relatedItems = false }) {
  const scrollToTopSlowly = () => animateScroll.scrollToTop();

  return (
    <div className="item">
      <Link to={`/product/${id}`} /* prodId */>
        <img
          onClick={() =>
            relatedItems ? scrollToTopSlowly() : window.scrollTo(0, 0)
          }
          src={image}
          alt=""
        />
      </Link>
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-prices-new">{`${newPrice} lei`}</div>
        <div className="item-prices-old">{`${oldPrice} lei`}</div>
      </div>
    </div>
  );
}

export default Item;
