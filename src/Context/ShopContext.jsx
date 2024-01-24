import React, { useState, useEffect, createContext } from "react";
import allProducts from "../Components/Assets/allProducts";

export const ShopContext = createContext();

let defaultCart = Array.from({ length: allProducts.length }, () => ({
  s: 0,
  m: 0,
  l: 0,
  xl: 0,
  xxl: 0,
}));

let defaultVotes = Array.from(
  { length: allProducts.length },
  (value) => (value = { voted: false, rating: 0 })
);

const AppContext = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const allItems = JSON.parse(localStorage.getItem("cartItems"));
    return allItems ? allItems : defaultCart;
  });
  const [votes, setVotes] = useState(defaultVotes);
  const [activeSize, setActiveSize] = useState();

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleSelectedSize = (size) => {
    setActiveSize(size);
  };

  const handleAddToCart = (itemId) => {
    activeSize &&
      setCartItems((prev) =>
        prev.map((object, indexOfObject) =>
          indexOfObject + 1 === itemId
            ? { ...object, [activeSize]: object[activeSize] + 1 }
            : object
        )
      );
  };

  const removeFromCart = (itemId, size) => {
    setCartItems((prev) =>
      prev.map((object, indexOfObject) =>
        indexOfObject + 1 === itemId
          ? { ...object, [size]: object[size] - 1 }
          : object
      )
    );
  };

  const totalQuantity = cartItems.reduce((total, item) => {
    total += item.s + item.m + item.l + item.xl + item.xxl;
    return total;
  }, 0);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    cartItems.map((_, i) => {
      const eachProduct = cartItems[i];
      for (let size in eachProduct) {
        if (eachProduct[size] > 0) {
          totalAmount += eachProduct[size] * allProducts[i].newPrice;
        }
      }
      return null;
    });
    return totalAmount;
  };

  const contextValues = {
    allProducts,
    cartItems,
    totalQuantity,
    activeSize,
    votes,
    handleSelectedSize,
    handleAddToCart,
    removeFromCart,
    getTotalCartAmount,
    setActiveSize,
    setVotes,
  };

  return (
    <ShopContext.Provider value={contextValues}>
      {children}
    </ShopContext.Provider>
  );
};

export default AppContext;
