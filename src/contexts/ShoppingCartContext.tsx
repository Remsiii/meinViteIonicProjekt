// ShoppingCartContext.tsx

import React, { createContext, useState, useContext } from 'react';

type CartItem = {
  title: string;
  description: string;
  price: number;
  type: string;
  quantity: number;
};

type ShoppingCartProviderProps = {
    children: React.ReactNode;
  };

type ShoppingCartContextType = {
  items: CartItem[];
  setItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
};

const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(undefined);

export const ShoppingCartProvider: React.FC<ShoppingCartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  
  return (
    <ShoppingCartContext.Provider value={{ items, setItems }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = (): ShoppingCartContextType => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error('useShoppingCart muss innerhalb eines ShoppingCartProvider verwendet werden.');
  }
  return context;
};


