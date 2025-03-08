import { createContext, useState, useCallback, useMemo, useEffect, ReactNode } from "react";
import { PRODUCTS } from "../products";
import { Product } from "../types/product";

interface CartItems {
  [key: number]: number;
}

interface ShopContextValue {
  cartItems: CartItems;
  addToCart: (itemId: number) => void;
  updateCartItemCount: (newAmount: number, itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  getTotalCartAmount: () => number;
  buy: () => void;
}

interface ShopContextProviderProps {
  children: ReactNode;
}

// Context'i ayrı oluşturup default değer veriyoruz
export const ShopContext = createContext<ShopContextValue>({
  cartItems: {},
  addToCart: () => {},
  updateCartItemCount: () => {},
  removeFromCart: () => {},
  getTotalCartAmount: () => 0,
  buy: () => {},
});

// Local storage işlemleri için yardımcı fonksiyonlar
const CART_STORAGE_KEY = 'shopping_cart';

const getStoredCart = (): CartItems => {
  try {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    return savedCart ? JSON.parse(savedCart) : getDefaultCart();
  } catch {
    return getDefaultCart();
  }
};

const getDefaultCart = (): CartItems => {
  const cart: CartItems = {};
  PRODUCTS.forEach((product: Product) => {
    cart[product.id] = 0;
  });
  return cart;
};

export const ShopContextProvider: React.FC<ShopContextProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItems>(getStoredCart);

  // Debounced local storage update
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [cartItems]);

  const getTotalCartAmount = useCallback(() => {
    return Object.entries(cartItems).reduce((total, [itemId, quantity]) => {
      const item = PRODUCTS.find(product => product.id === Number(itemId));
      return total + (item?.price || 0) * quantity;
    }, 0);
  }, [cartItems]);

  const addToCart = useCallback((itemId: number) => {
    setCartItems(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  }, []);

  const removeFromCart = useCallback((itemId: number) => {
    setCartItems(prev => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0)
    }));
  }, []);

  const updateCartItemCount = useCallback((newAmount: number, itemId: number) => {
    setCartItems(prev => ({
      ...prev,
      [itemId]: Math.max(newAmount, 0)
    }));
  }, []);

  const buy = useCallback(() => {
    setCartItems(getDefaultCart());
    localStorage.removeItem(CART_STORAGE_KEY);
  }, []);

  const contextValue = useMemo(() => ({
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    buy,
  }), [cartItems, addToCart, updateCartItemCount, removeFromCart, getTotalCartAmount, buy]);

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
}; 