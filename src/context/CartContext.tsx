import React, { createContext, useContext, useReducer } from 'react';
import { MenuItem } from '../types/menu';

interface CartItem extends MenuItem {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  subtotal: number;
  discount: number;
  total: number;
}

type CartAction = 
  | { type: 'ADD_ITEM'; payload: MenuItem }
  | { type: 'REMOVE_ITEM'; payload: number }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'APPLY_DISCOUNT'; payload: number };

const initialState: CartState = {
  items: [],
  subtotal: 0,
  discount: 0,
  total: 0
};

const calculateTotals = (items: CartItem[], discount: number) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal - (subtotal * discount);
  return { subtotal, total };
};

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      let newItems;
      
      if (existingItem) {
        newItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newItems = [...state.items, { ...action.payload, quantity: 1 }];
      }
      
      const { subtotal, total } = calculateTotals(newItems, state.discount);
      return { ...state, items: newItems, subtotal, total };
    }
    
    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.id !== action.payload);
      const { subtotal, total } = calculateTotals(newItems, state.discount);
      return { ...state, items: newItems, subtotal, total };
    }
    
    case 'UPDATE_QUANTITY': {
      const newItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      const { subtotal, total } = calculateTotals(newItems, state.discount);
      return { ...state, items: newItems, subtotal, total };
    }
    
    case 'APPLY_DISCOUNT': {
      const { subtotal, total } = calculateTotals(state.items, action.payload);
      return { ...state, discount: action.payload, subtotal, total };
    }
    
    default:
      return state;
  }
}

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}