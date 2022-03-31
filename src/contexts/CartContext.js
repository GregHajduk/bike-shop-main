import { createContext, useState } from "react";
const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (name, price, quantity, color, image, size) => {
    setItems((prev) => [
      ...prev,
      { name, price, quantity, color, image, size },
    ]);
  };

  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
export default CartContext;
