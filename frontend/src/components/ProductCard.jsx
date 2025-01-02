import React from 'react';
import { Link, useLocation } from 'react-router-dom';
const ProductCard = ({ product }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
      <div
        className="h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${product.imageUrl})` }}
      ></div>
      <div className="p-4 flex flex-col">
      <Link to={`/products/${product._id}`}><h3 className="text-[14px] font-medium mb-2 font-sans text-gray-400 text-decoration-line: underline ">{product.mark}</h3></Link>
        <h3 className="text-[15px] font-medium mb-2 font-sans">{product.name}</h3>
        <div className="flex items-center text-sm text-gray-600 space-x-2 mb-2">
          <span className='text-blue-500 text-sm font-medium'>{product.flavors} Flavors</span>
          <span className='text-blue-500 text-sm font-medium'>|</span>
          <span className='text-blue-500 text-sm font-medium'>{product.sizes} Sizes</span>
        </div>
        <p className="text-xl font-bold text-gray-800 mb-2">${product.price}</p>
        <div className="text-blue-500 text-sm font-medium">
          ⭐ {product.rating} ({product.reviews} reviews)
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
