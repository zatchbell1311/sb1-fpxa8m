import React from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, ShoppingBag, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { state } = useCart();
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <UtensilsCrossed className="h-8 w-8 text-orange-500" />
              <span className="font-bold text-xl text-gray-900">CloudBites</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-500">Home</Link>
            <Link to="/menu" className="text-gray-700 hover:text-orange-500">Menu</Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-500">Contact</Link>
            <Link to="/cart" className="relative group">
              <ShoppingBag className="h-6 w-6 text-gray-700 group-hover:text-orange-500" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
              {state.items.length > 0 && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg p-4 hidden group-hover:block">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal:</span>
                      <span>${state.subtotal.toFixed(2)}</span>
                    </div>
                    {state.discount > 0 && (
                      <div className="flex justify-between text-sm text-green-600">
                        <span>Discount:</span>
                        <span>-${(state.subtotal * state.discount).toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between font-bold border-t pt-2">
                      <span>Total:</span>
                      <span>${state.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}