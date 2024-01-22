import React, { useContext, useState} from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

function ProductDisplay({ product }) {

   const {addToCart} = useContext(ShopContext)
   const [activeSize, setActiveSize] = useState("")
   

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
        <div onClick={()=>setActiveSize("S")} className={activeSize === "S"? "active-size" : ""}>S</div>
        <div onClick={()=>setActiveSize("M")} className={activeSize === "M"? "active-size" : ""}>M</div>
        <div onClick={()=>setActiveSize("L")} className={activeSize === "L"? "active-size" : ""}>L</div>
        <div onClick={()=>setActiveSize("XL")} className={activeSize === "XL"? "active-size" : ""}>XL</div>
        <div onClick={()=>setActiveSize("XXL")} className={activeSize === "XXL"? "active-size" : ""}>XXL</div>
    </div>
</div>
<button onClick={()=>{addToCart(product.id)}}>ADAUGA IN COS</button>
<p className="product-display-right-category"><span>Categoria: </span>Femeie, Bluza, Scurta</p>
<p className="product-display-right-category"><span>Taguri: </span>modern, original, nou</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
