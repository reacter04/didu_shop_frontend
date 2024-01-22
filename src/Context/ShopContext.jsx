import React, { useState, useEffect, createContext } from "react";
import allProducts from "../Components/Assets/allProducts";

export const ShopContext = createContext();

let defaultCart = Array.from({ length: allProducts.length }, (_, i) => ({
  id: i + 1,
  s: 0,
  m: 0,
  l: 0,
  xl: 0,
  xxl: 0,
}));



const AppContext = ({ children }) => {
  const [cartItems, setCartItems] = useState(defaultCart);
  const [activeSize, setActiveSize] = useState()

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

   
  const handleSelectedSize = (size) =>{
    setActiveSize(size)
}


  const handleAddToCart = (itemId) => {
    activeSize &&
    setCartItems((prev) =>
      prev.map((object) =>
        object.id === itemId ? { ...object, [activeSize]: object[activeSize] + 1 } : object
      )
    );
  };

  const removeFromCart = (product, size) => {

    console.log(cartItems, product)
    setCartItems((prev) =>
    prev.map((object) =>
      object.id === product.id ? { ...object, [size]: object[size] - 1 } : object
    )
  );
  };

  const totalQuantity = cartItems.reduce((total, item) => {
    total += item.s + item.m + item.l + item.xl + item.xxl;
    return total;
  }, 0);
  

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
    activeSize,
    handleSelectedSize,
    handleAddToCart,
    removeFromCart,
    getTotalCartAmount,
    setActiveSize
  };

  return (
    <ShopContext.Provider value={contextValues}>
      {children}
    </ShopContext.Provider>
  );
};

export default AppContext;
