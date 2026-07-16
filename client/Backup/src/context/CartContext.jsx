import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

/**
 * CartProvider — manages shopping cart state across all pages.
 * Exposes addItem, removeItem, clearCart, and cartItems.
 */
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (asset) => {
    setCartItems((prev) => {
      const exists = prev.find((i) => i.id === asset.id);
      if (exists) return prev; // No duplicates
      return [...prev, asset];
    });
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  const clearCart = () => setCartItems([]);

  const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price), 0);

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
};
