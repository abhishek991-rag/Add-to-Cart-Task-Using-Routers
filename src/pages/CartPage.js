// src/pages/CartPage.js
import React from 'react';
import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, getSubtotal, getDiscountedTotal } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600 text-xl mt-10">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items List */}
          <div className="lg:w-2/3">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* Cart Summary */}
          <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow-md h-fit">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>${getSubtotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2 text-green-600 font-semibold">
              <span>Discount (10%):</span>
              <span>-${(getSubtotal() * 0.10).toFixed(2)}</span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between font-bold text-xl">
              <span>Total:</span>
              <span>${getDiscountedTotal().toFixed(2)}</span>
            </div>
            <button className="w-full bg-green-500 text-white py-3 rounded-md mt-6 hover:bg-green-600 transition duration-300">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;