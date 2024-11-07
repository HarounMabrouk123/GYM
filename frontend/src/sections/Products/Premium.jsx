import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import axios from 'axios';

const Premium = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/products');
        console.log(data); // Check what data looks like
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-bebas font-bold mb-8 mt-9">Shop by Category</h1>
      <div className="flex justify-around gap-2 space-x-8 mb-10">
        <button className="text-2xl font-bebas text-gray-500">Protein</button>
        <button className="text-2xl font-bebas text-gray-500">Pre-Workout</button>
        <button className="text-2xl font-bebas text-gray-500">Vitamins & Wellness</button>
        <button className="text-2xl font-bebas text-gray-500">Healthy Weight</button>
        <button className="text-2xl font-bebas text-gray-500">Clothing & Equipment</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        <div className="h-[100%] w-full bg-black flex flex-col justify-between">
          <h2 className="text-white pl-3 pt-3 font-sans">75 products</h2>
          <h1 className="text-center text-white font-bangers text-[80px] font-bold px-1">Protein</h1>
          <h2 className="text-center text-2xl underline pb-3 font-bangers text-blue-500">Shop all protein</h2>
        </div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Premium;
