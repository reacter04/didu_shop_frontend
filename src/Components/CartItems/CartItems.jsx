import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

function CartItems() {
  const { getTotalCartAmount, allProducts, cartItems, removeFromCart } =
    useContext(ShopContext);

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
                <img className="cart-icon-product-icon" src={e.image} alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cart-items-quantity">
                  {cartItems[e.id]}
                </button>
                <p>{e.new_price * cartItems[e.id]}</p>
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
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-items-total-item">
              <p>Costul livarii</p>
              <p>Gratis</p>
            </div>
            <hr />
            <div className="cart-items-total-item">
              <h3>Total</h3>
              <h3>${0}</h3>
            </div>
          </div>
          <button>Finalizeaza comanda</button>
        </div>
        <div className="cart-items-promocode">
          <p>Daca aveti un cod promotional introduceti-l aici</p>
          <div className="cart-items-promobox">
            <input type="text" placeholder="Codul promotional" />
            <button>Trimite</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
