import { useState, useEffect, useCallback, type ReactNode, createContext } from "react";
import { loadCart, saveCart } from "../hooks/useCart";
import { type CartItem, type CartContextType } from "../types/cart";

export const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>(loadCart);

  useEffect(() => {
    saveCart(cartItems);
  }, [cartItems]);

  const addToCart = useCallback(
    (service: Omit<CartItem, "qty"> & { qty?: number }) => {
      setCartItems((prev) => {
        const existing = prev.find((item) => item.id === service.id);
        if (existing) {
          return prev.map((item) =>
            item.id === service.id
              ? { ...item, qty: item.qty + (service.qty ?? 1) }
              : item,
          );
        }
        return [...prev, { ...service, qty: service.qty ?? 1 }];
      });
    },
    [],
  );

  const removeFromCart = useCallback((id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const updateQty = useCallback((id: number, delta: number) => {
    setCartItems((prev) => {
      const updated = prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + delta } : item,
      );
      return updated.filter((item) => item.qty > 0);
    });
  }, []);

  // Tính tổng tiền bằng reduce (bao gồm cả subService)
  const totalPrice = cartItems.reduce((total, item) => {
    const itemTotal = item.price * item.qty;
    const subTotal = item.subService
      ? item.subService.reduce((sub, s) => sub + s.price * s.qty, 0)
      : 0;
    return total + itemTotal + subTotal;
  }, 0);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const cartCount = cartItems.reduce((count, item) => count + item.qty, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        totalPrice,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
