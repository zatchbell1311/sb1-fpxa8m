import React from 'react';
import MenuCard from '../components/MenuCard';
import { menuItems } from '../data/menu';
import { MenuItem } from '../types/menu';
import { useCart } from '../context/CartContext';

export default function Menu() {
  const { dispatch } = useCart();

  const handleAddToCart = (item: MenuItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map(item => (
            <MenuCard 
              key={item.id} 
              item={item}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}