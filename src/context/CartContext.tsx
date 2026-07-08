import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { connectSocket, sendMessage } from "../socket";

/* eslint-disable react-refresh/only-export-components */

export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  seatNumber: string;
  address: string;
  status: "pending" | "completed";
  timestamp: number;
}

interface CartContextType {
  items: CartItem[];
  orders: Order[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  submitOrder: (seatNumber: string, address: string, currentItems: CartItem[]) => void;
  receiveOrder: (order: Order) => void;
  completeOrder: (orderId: string) => void;
  deleteOrder: (orderId: string) => void;
  totalItems: number;
  totalPrice: number;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const loadOrders = (): Order[] => {
  try {
    const raw = localStorage.getItem("bruliere-orders");
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const saveOrders = (orders: Order[]) => {
  localStorage.setItem("bruliere-orders", JSON.stringify(orders));
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>(loadOrders);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    connectSocket();
  }, []);

  useEffect(() => {
    saveOrders(orders);
  }, [orders]);

  const addItem = (newItem: Omit<CartItem, "quantity">) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === newItem.id);
      if (existing) {
        return prev.map((i) =>
          i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...newItem, quantity: 1 }];
    });
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity } : i))
    );
  };

  const clearCart = () => setItems([]);

  const submitOrder = (seatNumber: string, address: string, currentItems: CartItem[]) => {
    if (currentItems.length === 0) return;
    const order: Order = {
      id: crypto.randomUUID(),
      items: [...currentItems],
      total: currentItems.reduce((sum, i) => sum + i.price * i.quantity, 0),
      seatNumber,
      address,
      status: "pending",
      timestamp: Date.now(),
    };
    setOrders((prev) => [order, ...prev]);
    clearCart();
    sendMessage(JSON.stringify({ type: "new-order", order }));
  };

  const receiveOrder = (order: Order) => {
    setOrders((prev) => {
      if (prev.find((o) => o.id === order.id)) return prev;
      return [order, ...prev];
    });
  };

  const completeOrder = (orderId: string) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.id === orderId ? { ...o, status: "completed" } : o
      )
    );
  };

  const deleteOrder = (orderId: string) => {
    setOrders((prev) => prev.filter((o) => o.id !== orderId));
  };

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        orders,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        submitOrder,
        receiveOrder,
        completeOrder,
        deleteOrder,
        totalItems,
        totalPrice,
        cartOpen,
        setCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
