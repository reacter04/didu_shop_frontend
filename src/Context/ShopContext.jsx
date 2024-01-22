import React, { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import allProducts from "../Components/Assets/allProducts";

export const ShopContext = createContext();

let defaultCart = Array.from({ length: allProducts.length }, (_, i) => ({
  id: i + 1,
  units: 0,
  marime: "",
}));

const AppContext = ({ children }) => {
  const [cartItems, setCartItems] = useState(defaultCart);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemId) => {
    setCartItems((prev) =>
      prev.map((object) =>
        object.id === itemId ? { ...object, units: object.units + 1 } : object
      )
    );
  };

console.log(cartItems)

  const removeFromCart = (itemId) => {
    setCartItems((prev) =>
      prev.map((object) =>
        object.id === itemId ? { ...object, units: object.units - 1 } : object
      )
    );
  };

  const totalQuantity = cartItems.reduce(
    (total, item) => (total += item.units),
    0
  );

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    cartItems.map(
      (item) =>
        item.units &&
        (totalAmount +=
          item.units *
          allProducts.find((product) => product.id === item.id).new_price)
    );
    return totalAmount;
  };

  const contextValues = {
    allProducts,
    cartItems,
    totalQuantity,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <ShopContext.Provider value={contextValues}>
      {children}
    </ShopContext.Provider>
  );
};

export default AppContext;
