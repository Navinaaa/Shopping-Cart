import { createContext, useContext, useState, type ReactNode } from "react";
import { Cart } from "../components/Cart";

type CartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type CartContextType = {
  openCart: () => void;
  closeCart: () => void;
  getItemQunatity: (id: number) => number;
  increaseCartQunatity: (id: number) => void;
  decreaseCartQunatity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}

export function CartProvider({ children }: CartProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  function getItemQunatity(id: number) {
    return cartItems.find(item => item.id === id)?.quantity || 0;
  }

  function increaseCartQunatity(id: number) {
    setCartItems(currItems => {
      if (!currItems.find(item => item.id === id)) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
    });
  }

  function decreaseCartQunatity(id: number) {
    setCartItems(currItems =>
      currItems
        .map(item => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
        .filter(item => item.quantity > 0)
    );
  }

  function removeFromCart(id: number) {
    setCartItems(currItems => currItems.filter(item => item.id !== id));
  }

  return (
    <CartContext.Provider
      value={{
        getItemQunatity,
        increaseCartQunatity,
        decreaseCartQunatity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
      <Cart isOpen={isOpen} />
    </CartContext.Provider>
  );
}
