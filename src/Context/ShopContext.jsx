import React, { useState } from "react";
import { createContext } from "react";
import allProducts from "../Components/Assets/allProducts";

export const ShopContext = createContext();

const getDefaultCart = () => {
  let cart = {};
  allProducts.map((_, i) => (cart[i + 1] = 0));
  return cart;
};

const AppContext = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems){
      if (cartItems[item] > 0) {
        let itemInfo = allProducts.find(product => product.id === +(item))
        totalAmount += itemInfo.new_price * cartItems[item]
      }
    }
    return totalAmount
   
  };

  const getTotalQuantity = () => {
    let totalQuantity = 0 
    for (const item in cartItems){
     totalQuantity += cartItems[item]
    }
    return totalQuantity
  }


  const contextValues = { allProducts, cartItems, addToCart, removeFromCart, getTotalCartAmount ,getTotalQuantity};

  return (
    <ShopContext.Provider value={contextValues}>
      {children}
    </ShopContext.Provider>
  );
};

export default AppContext;
