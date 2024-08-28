import React, { createContext, useState, useContext } from 'react';

// Context ve Provider tanımlamaları
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  
  const addToCart = (item) => {
    setCartItems(prevItems => [...prevItems, item]);
  };

  const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, totalAmount }}>
      {children}
    </CartContext.Provider>
  );
};

// useCart hook'unu tanımlayın
export const useCart = () => {
  return useContext(CartContext);
};
