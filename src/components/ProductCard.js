// src/components/ProductCard.js
import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart, isProductInCart } = useCart();
  const productIsInCart = isProductInCart(product.id);

  const handleCartAction = () => {
    if (productIsInCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col p-4 transform transition duration-300 hover:scale-105">
      <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4" />
      <h3 className="text-lg font-semibold mb-2 line-clamp-2">{product.title}</h3>
      <p className="text-gray-700 text-sm mb-4 line-clamp-3">{product.description}</p>
      <div className="mt-auto flex justify-between items-center pt-2">
        <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
        <button
          onClick={handleCartAction}
          className={`px-4 py-2 rounded-md transition duration-300 ease-in-out ${
            productIsInCart
              ? 'bg-red-500 hover:bg-red-600 text-white'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          } focus:outline-none focus:ring-2 focus:ring-opacity-50`}
        >
          {productIsInCart ? 'Remove from Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;