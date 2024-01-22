import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

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
        <p>Produse</p>
        <p>Denumire produs</p>
        <p>Pretul</p>
        <p>Canitate</p>
        <p>Total</p>
        <p>Sterge</p>
      </div>
      <hr />
      {allProducts.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={crypto.randomUUID()}>
              <div className="cart-items-format cart-items-format-main">
                <Link to={`/product/${allProducts.id}`}><img className="cart-icon-product-icon" src={e.image} alt="" /></Link>
                <p>{e.name}</p>
                <p>{e.new_price} lei</p>
                <button className="cart-items-quantity">
                  {cartItems[e.id]}
                </button>
                <p>{e.new_price * cartItems[e.id]} lei</p>
                <div>
                  <img
                    className="cart-items-remove-icon"
                    onClick={() => {
                      removeFromCart(e.id);
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
        return null;
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
                {getTotalCartAmount() && getTotalCartAmount() < 1000
                  ? "50 lei"
                  : "Gratis"}
              </p>
            </div>
            <hr />
            <div className="cart-items-total-item">
              <h3>Total</h3>
              <h3>
                {getTotalCartAmount() && getTotalCartAmount() < 1000
                  ? `${getTotalCartAmount() + 50}`
                  : `${getTotalCartAmount()}`}{" "}
              </h3>
            </div>
          </div>
          <button>Finalizeaza comanda</button>
        </div>
        <div className="cart-items-promocode">
          <form onSubmit={handleSubmitPromoCode} action="">
            <p>Daca aveti un cod promotional introduceti-l aici</p>
            <div className="cart-items-promobox">
              <input
                type="text"
                placeholder="Codul promotional din 12 caractere"
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
