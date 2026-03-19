export type CartSubItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  qty: number;
};

export type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  time?: string;
  qty: number;
  subService?: CartSubItem[];
};

export type CartContextType = {
  cartItems: CartItem[];
  addToCart: (service: Omit<CartItem, "qty"> & { qty?: number }) => void;
  removeFromCart: (id: number) => void;
  updateQty: (id: number, delta: number) => void;
  clearCart: () => void;
  totalPrice: number;
  cartCount: number;
};
