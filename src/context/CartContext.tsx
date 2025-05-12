import { createContext, useState, useEffect, ReactNode } from "react";

interface Produit {
  nom: string;
  prix: number;
}

interface CartContextType {
  cart: Produit[];
  addToCart: (produit: Produit) => void;
  removeFromCart: (index: number) => void;
  total: number;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  total: 0,
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Produit[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("hf-cart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("hf-cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (produit: Produit) => {
    setCart([...cart, produit]);
  };

  const removeFromCart = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const total = cart.reduce((acc, curr) => acc + curr.prix, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, total }}>
      {children}
    </CartContext.Provider>
  );
};
