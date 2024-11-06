import React from 'react'
import ProductCard from '../../components/ProductCard';
const products = [
    {
        id: 1,
        mark:'Bodybuilding.com Signature' ,
        name: 'Bodybuilding.com Signature 100% Whey Protein Powder',
        price: ' $39.99',
        flavors: 9,
        sizes: 2,
        rating: 4.5,
        reviews: 1024,
        imageUrl: 'url-to-image-1',
      },
      {
        id: 2,
        mark:'Bodybuilding.com Signature' ,
        name: 'Bodybuilding.com Signature 100% Whey Isolate',
        price: ' $34.99',
        flavors: 2,
        sizes: 2,
        rating: 4.7,
        reviews: 112,
        imageUrl: 'url-to-image-2',
      },
      {
        id: 3,
        mark:'Bodybuilding.com Signature' ,
        name: 'Egg Whites International 100% Pure Liquid Egg Whites',
        price: ' $57.95',
        flavors: 1,
        sizes: 7,
        rating: 4.8,
        reviews: 193,
        imageUrl: 'url-to-image-3',
      },
      {
        id: 4,
        mark:'Bodybuilding.com Signature' ,
        name: 'Amazing Muscle Whey Protein',
        price: ' $33.99',
        flavors: 11,
        sizes: 2,
        rating: 4.2,
        reviews: 14,
        imageUrl: 'url-to-image-4',
      },
      {
        id: 5,
        mark:'Bodybuilding.com Signature' ,
        name: 'Optimum Nutrition Gold Standard Whey',
        price: ' $44.99',
        flavors: 12,
        sizes: 4,
        rating: 4.9,
        reviews: 1500,
        imageUrl: 'url-to-image-5',
      }
    // Add more products as needed
  ];

const Premium = () => {
  return (
    <div className="flex flex-col  '">
    <h1 className="text-4xl font-bebas font-bold mb-8 mt-9">Shop by Category</h1>
    <div className="flex justify-around gap-2 space-x-8 mb-10 ">
      <button className="text-2xl font-bebas text-gray-500">Protein</button>
      <button className="text-2xl font-bebas text-gray-500">Pre-Workout</button>
      <button className="text-2xl font-bebas text-gray-500">Vitamins & Wellness</button>
      <button className="text-2xl font-bebas text-gray-500">Healthy Weight</button>
      <button className="text-2xl font-bebas text-gray-500">Clothing & Equipment</button>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
      <div className='h-[100%] w-full bg-black flex flex-col justify-between '>
          <h2 className='text-white pl-3 pt-3 font-sans'>75 products</h2>
          <h1 className='text-center text-white font-bangers text-[80px]  font-bold px-1 '>protein</h1>
          <h2 className='text-center text-2xl text-decoration-line: underline pb-3  font-bangers text-blue-500 '>Shop all protein</h2>

      </div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
  )
}

export default Premium