import React, { createContext, useContext, useState } from "react";
import { CartProduct } from "../types/CartProduct";

type CartContextType = {
  cart: CartProduct[];
  addToCart: (item: CartProduct) => void;
  clearCart: () => void;
  removeFromCart: (id: string) => void;
  getTotal: () => number;
  getCounter: () => number;
  sumOne: (id: string) => void;
  substractOne: (id: string) => void;
};

const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  getTotal: () => 0,
  getCounter: () => 0,
  sumOne: () => {},
  substractOne: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartProduct[]>([]);

  const addToCart = (item: CartProduct) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id
            ? {
                ...p,
                count: p.count + item.count,
                totalPrice: (p.count + item.count) * p.price,
              }
            : p
        );
      } else {
        return [...prev, { ...item, totalPrice: item.count * item.price }];
      }
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotal = () => {
  return cart.reduce((sum, item) => sum + (item.totalPrice ?? 0), 0);
};

  const getCounter = () => {
    return cart.reduce((sum, item) => sum + item.count, 0);
  };

  const sumOne = (id: string) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              count: item.count + 1,
              totalPrice: (item.count + 1) * item.price,
            }
          : item
      )
    );
  };

  const substractOne = (id: string) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id && item.count > 1
            ? {
                ...item,
                count: item.count - 1,
                totalPrice: (item.count - 1) * item.price,
              }
            : item
        )
        .filter((item) => item.count > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        removeFromCart,
        getTotal,
        getCounter,
        sumOne,
        substractOne,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
