import React, { useState, useContext, useEffect} from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

function ProductDisplay({ product }) {

  const {handleAddToCart, handleSelectedSize, activeSize ,setActiveSize} = useContext(ShopContext)

  /*pentru gestionarea butonului de adaugare*/
  const [buttonText, setButtonText] = useState('Adauga');
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    if(activeSize){
    setButtonText('Adaugat');
    setIsAdded(true);
    setTimeout(() => {
      setButtonText('Adauga');
      setIsAdded(false);
    }, 300);
  }};


   useEffect(()=>{setActiveSize("")}, [setActiveSize])
  
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
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>123</p>
        </div>
        <div className="product-display-right-prices">
          <div className="product-display-right-price-old">{product.old_price} lei</div>
          <div className='product-display-right-price-new'>{product.new_price} lei</div>
</div>
<div className="product-display-right-description">
Puloverul nostru tricotat din bumbac organic reprezintă echilibrul perfect între confort și stil. Realizat cu atenție la detalii, acest pulover este un element esențial în garderoba ta de sezon rece. Materialul său de înaltă calitate asigură o senzație plăcută pe piele și o căldură optimă.
<div className="product-display-right-size">
    <h1>Select size:</h1>
    <div className="product-display-right-sizes">
        <div onClick={()=>handleSelectedSize("s")} className={activeSize === "s"? "active-size" : ""}>S</div>
        <div onClick={()=>handleSelectedSize("m")} className={activeSize === "m"? "active-size" : ""}>M</div>
        <div onClick={()=>handleSelectedSize("l")} className={activeSize === "l"? "active-size" : ""}>L</div>
        <div onClick={()=>handleSelectedSize("xl")} className={activeSize === "xl"? "active-size" : ""}>XL</div>
        <div onClick={()=>handleSelectedSize("xxl")} className={activeSize === "xxl"? "active-size" : ""}>XXL</div>
    </div>
</div>
<div className="add-to-cart-container">
<button className={`add-to-cart-btn ${isAdded? "product-added" : ""}`} onClick={()=>{handleAddToCart(product.id); handleClick()}}>{buttonText}{!activeSize && <span className="add-to-cart-info">Alege marimea</span>}</button>
</div>
<p className="product-display-right-category"><span>Categoria: </span>Femeie, Bluza, Scurta</p>
<p className="product-display-right-category"><span>Taguri: </span>modern, original, nou</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
