import React from 'react';
import prot1 from '../assets/images/prot1.webp';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart} from '../slices/cartSlice';

const CartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems, totalPrice } = cart; // Ensure totalPrice is part of your state if not calculate it from cartItems
  const addToCartHandler = async (product , quantity) => {
    dispatch(addToCart({...product , quantity}))
  }

  const handleClearCart = async(id) => {
    dispatch(removeFromCart(id))
  }

  return (
    <div className='flex justify-center padding gap-7'>
      <div className='flex flex-col mt-12'>
        <h1 className='text-6xl font-bold mb-4 font-bebas'>Your shopping cart</h1>
        
        <div className='flex flex-col justify-center items-center gap-3'>
          {cartItems.map((item) => (
            <div key={item.id} className='bg-white p-4 rounded-md shadow-md flex justify-between gap-3 w-full'>
              <img src={item.imageUrl} alt="Product" className="w-24" />
              <div className='flex flex-col'>
                <h6 className='text-xs font-medium font-sans'>{item.mark}</h6>
                <h5 className='text-[14px] text-[#FDDB07] font-medium font-sans w-56 underline'>{item.name}</h5>
              </div>
              <p className="text-xl font-bold text-gray-800">${item.price * item.quantity}</p>
              <select className="border border-gray-300 rounded px-4 py-2 mr-4 h-[50%]" defaultValue={item.quantity} onChange={(e) => addToCartHandler(item,e.target.value)}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
              <button className="px-8 h-[50%] bg-black text-white font-bold rounded" onClick={() => handleClearCart(item._id)}>
                            Remove from cart
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col bg-white p-4 rounded-md shadow-md w-full lg:w-1/3 justify-between gap-3 mt-8 lg:mt-32 h-auto'>
        <h1 className='text-xl font-bold'>Total: {cartItems.length} items</h1>
        <p className="text-xl font-bold text-gray-800">${totalPrice}</p>
        <hr />
        <button className="px-8 py-2 bg-black text-white font-bold rounded font-sans">
          Proceed to checkout
        </button>
      </div>
    </div>
  );
}

export default CartScreen;
