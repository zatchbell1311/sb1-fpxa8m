import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { MenuItem } from '../types/menu';

interface MenuCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
}

export default function MenuCard({ item, onAddToCart }: MenuCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
          </div>
          <span className="text-lg font-bold text-orange-500">${item.price.toFixed(2)}</span>
        </div>
        <button
          onClick={() => onAddToCart(item)}
          className="mt-4 w-full bg-orange-500 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-orange-600 transition-colors"
        >
          <ShoppingBag className="h-5 w-5" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}