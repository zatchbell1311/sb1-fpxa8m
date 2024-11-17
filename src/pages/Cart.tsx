import React, { useState } from 'react';
import { ShoppingBag, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

const DISCOUNT_CODES = {
  'WELCOME10': 0.10,
  'SPECIAL20': 0.20,
  'FEAST25': 0.25
};

export default function Cart() {
  const { state, dispatch } = useCart();
  const [discountCode, setDiscountCode] = useState('');

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity < 1) {
      dispatch({ type: 'REMOVE_ITEM', payload: id });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: newQuantity } });
    }
  };

  const handleApplyDiscount = () => {
    const discount = DISCOUNT_CODES[discountCode as keyof typeof DISCOUNT_CODES];
    if (discount) {
      dispatch({ type: 'APPLY_DISCOUNT', payload: discount });
    }
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center text-gray-500">
              <ShoppingBag className="h-16 w-16 mb-4" />
              <h2 className="text-2xl font-semibold ml-4">Your cart is empty</h2>
            </div>
            <p className="text-center text-gray-600 mt-2">
              Add some delicious items from our menu and they will show up here
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>
          
          <div className="space-y-4">
            {state.items.map(item => (
              <div key={item.id} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="p-1 rounded-full hover:bg-gray-100"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="p-1 rounded-full hover:bg-gray-100"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6">
            <div className="flex space-x-4">
              <input
                type="text"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value.toUpperCase())}
                placeholder="Enter discount code"
                className="flex-1 rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500"
              />
              <button
                onClick={handleApplyDiscount}
                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
              >
                Apply
              </button>
            </div>
            
            <div className="mt-6 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${state.subtotal.toFixed(2)}</span>
              </div>
              {state.discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discount ({(state.discount * 100)}%):</span>
                  <span>-${(state.subtotal * state.discount).toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between font-bold text-lg border-t pt-2">
                <span>Total:</span>
                <span>${state.total.toFixed(2)}</span>
              </div>
            </div>
            
            <button className="w-full mt-6 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}