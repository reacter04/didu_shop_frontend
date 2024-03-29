import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/icons/cart_cross_icon.png";

function CartItems() {
  const [promoCode, setPromoCode] = useState("");

  const { getTotalCartAmount, allProducts, cartItems, removeFromCart } =
    useContext(ShopContext);

  const handleSubmitPromoCode = (e) => {
    e.preventDefault();
    setPromoCode("");
  };


  return (
    <div className="cart-items">
      <div className="cart-items-format-main">
        <p>Produs</p>
        <p>Denumire</p>
        <p>Pretul</p>
        <p>Canitate</p>
        <p>Total</p>
        <p>Sterge</p>
      </div>
      <hr />
      {allProducts.map((e, i) => {
       const eachProduct = cartItems[i]
       let sizeDivs = []
      for (let size in eachProduct) 
        if (eachProduct[size] > 0) {
          sizeDivs = sizeDivs.concat(
            <div key={crypto.randomUUID()}>
              <div className="cart-items-format cart-items-format-main">
                <div>
                  <Link to={`/product/${e.id}`}>
                    <img
                      className="cart-icon-product-icon"
                      src={e.images[0]}
                      alt=""
                    />
                  </Link>
                </div>
                <p>{e.name} <strong>{size.toUpperCase()}</strong></p>
                <p>{e.newPrice} lei</p>
                <button className="cart-items-quantity">
                  {eachProduct[size]}
                </button>
                <p>{e.newPrice * eachProduct[size]} lei</p>
                <div>
                  <img
                    className="cart-items-remove-icon"
                    onClick={() => {
                      removeFromCart(e.id, size);
                    }}
                    src={remove_icon}
                    alt=""
                  />
                </div>
              </div>
              <hr />
            </div>
          );
        }
        return sizeDivs.length > 0? sizeDivs : null;
      })}
      <div className="cart-items-down">
        <div className="cart-items-total">
          <h1>Total unitati</h1>
          <div>
            <div className="cart-items-total-item">
              <p>Suma totala</p>
              <p>{getTotalCartAmount()} lei</p>
            </div>
            <hr />
            <div className="cart-items-total-item">
              <p>Costul livarii</p>
              <p>
                {getTotalCartAmount() && getTotalCartAmount() < 1000 ? "50 lei" :  "🛒 > 1000 lei = GRATUIT"}
              </p>
            </div>
            <hr />
            <div className="cart-items-total-item">
              <h3>Total</h3>
              <h3>
                {getTotalCartAmount() && getTotalCartAmount() < 1000
                  ? `${getTotalCartAmount() + 50} lei`
                  : `${getTotalCartAmount()} lei`}
              </h3>
            </div>
          </div>
          <button>Finalizeaza comanda</button>
        </div>
        <div className="cart-items-promocode">
          <form onSubmit={handleSubmitPromoCode} action="">
            <p>Daca aveti un cod promotional introduceti-l aici inainte de finalizarea comenzii</p>
            <div className="cart-items-promobox">
              <input
                type="text"
                placeholder="Maxim 12 caractere"
                value={promoCode}
                onChange={(e) =>
                  e.target.value.length <= 12 && setPromoCode(e.target.value)
                }
              />
              <button>Trimite</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
