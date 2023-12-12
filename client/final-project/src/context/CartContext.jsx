import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (cake) => {
    setCart((prevCart) => [
      ...prevCart,
      { id: cake.id, name: cake.name, price: cake.price },
    ]);
  };
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
