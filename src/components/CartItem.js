// src/components/CartItem.js
import React from 'react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4">
      <img src={item.image} alt={item.title} className="w-20 h-20 object-contain mr-4" />
      <div className="flex-1">
        <h3 className="font-semibold text-lg">{item.title}</h3>
        <p className="text-gray-600 text-sm">${item.price.toFixed(2)} each</p>
        <div className="flex items-center mt-2">
          <button
            onClick={() => decreaseQuantity(item.id)}
            className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md hover:bg-gray-300 disabled:opacity-50"
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <span className="mx-3 text-lg font-bold">{item.quantity}</span>
          <button
            onClick={() => increaseQuantity(item.id)}
            className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md hover:bg-gray-300"
          >
            +
          </button>
        </div>
      </div>
      <div className="text-right">
        <p className="text-lg font-bold">${(item.price * item.quantity).toFixed(2)}</p>
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-red-500 hover:text-red-700 text-sm mt-2"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;