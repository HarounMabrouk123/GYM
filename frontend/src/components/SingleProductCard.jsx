import React, { useState } from 'react';
import star from '../assets/icons/star.svg';
import { useParams ,useNavigate } from 'react-router-dom';
import { useGetProductDetailsQuery } from '../slices/productsApiSlice';
import { useDispatch } from 'react-redux';
import { removeFromCart , addToCart} from '../slices/cartSlice';

import Loader from './Loader';
import Message from './Message';

const SingleProductCard = () => {
    const { id: productId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { data: product, isLoading, error } = useGetProductDetailsQuery(productId);

    const [quantity, setQuantity] = useState(1);  // State for selected quantity

    const handleQuantityChange = (event) => {
        setQuantity(Number(event.target.value));  // Update quantity when the user selects a different value
    };
    

    const handleAddCart = () => {
        dispatch(addToCart({...product , quantity}))
        navigate('/cart')
    }
    const handleClearCart = () => {
        dispatch(removeFromCart());  // Clear the cart
    };

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <Message variant='danger'>{error?.data.message || error.error}</Message>;
    }

    return (
        <section className="flex justify-center gap-20">
            {/* Product Image */}
            <div className="mt-32 max-w-[50%]">
                <img
                    src={product.imageUrl}
                    alt={product?.name || 'Product Image'}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </div>

            {/* Product Details */}
            <div className="mt-32 max-w-[40%]">
                <div className="flex flex-col justify-start">
                    {/* Breadcrumbs and Title */}
                    <h6>{product?.mark || 'Brand Name'}</h6>
                    <h1 className="text-[45px] font-bebas font-bold w-[80%]">
                        {product?.name || 'Product Name'}
                    </h1>

                    {/* Rating Section */}
                    <div className="flex items-center">
                        <div className="flex">
                            <img src={star} className="mr-1 w-4 h-4" alt="star" />
                            <img src={star} className="mr-1 w-4 h-4" alt="star" />
                            <img src={star} className="mr-1 w-4 h-4" alt="star" />
                            <img src={star} className="mr-1 w-4 h-4" alt="star" />
                            <img src={star} className="mr-1 w-4 h-4" alt="half-star" />
                        </div>
                        <span className="text-gray-500 text-sm font-medium ml-1">
                            ({product?.reviews || '1025'})
                        </span>
                    </div>

                    {/* Pricing Section */}
                    <div className="flex justify-start gap-16 mt-4">
                        <div>
                            <p className="mb-0">
                                <span className="font-medium text-[16px]">Non-Member</span> ($1.21 /
                                Serving)
                            </p>
                            <p className="text-3xl font-bold text-gray-800">$79.99</p>
                        </div>
                        <div>
                            <p className="mb-0">
                                <span className="font-medium text-[16px]">BodyFit Member</span> ($1.09
                                / Serving)
                            </p>
                            <p className="text-3xl font-bold text-blue-600">
                                ${product?.price || 'Price'}
                            </p>
                        </div>
                    </div>
                    <p className="text-[18px] font-medium mt-2">% Best Price Promise</p>

                    {/* Package Size Options */}
                    <div className="mt-6">
                        <h3 className="font-medium">Package Size</h3>
                        <div className="flex gap-2 mt-1">
                            <button className="px-4 py-2 border rounded bg-gray-200 text-gray-500">
                                2 LBS.
                            </button>
                            <button className="px-4 py-2 border rounded bg-blue-600 text-white">
                                5 LBS.
                            </button>
                        </div>
                    </div>

                    {/* Flavor Options */}
                    <div className="mt-6">
                        <h3 className="font-medium">Flavor</h3>
                        <div className="flex flex-wrap gap-2 mt-1">
                            <button className="px-4 py-2 border rounded bg-blue-600 text-white">
                                Oatmeal Cookie
                            </button>
                            <button className="px-4 py-2 border rounded">Vanilla Cream</button>
                            <button className="px-4 py-2 border rounded">Chocolate Fudge</button>
                            <button className="px-4 py-2 border rounded bg-gray-200 text-gray-500">
                                Chocolate Chip Cookie
                            </button>
                            <button className="px-4 py-2 border rounded bg-gray-200 text-gray-500">
                                Mint Cocoa w/ Marshmallows
                            </button>
                            <button className="px-4 py-2 border rounded bg-gray-200 text-gray-500">
                                Mint Chocolate Chip Ice Cream
                            </button>
                            <button className="px-4 py-2 border rounded bg-gray-200 text-gray-500">
                                Strawberry Cream
                            </button>
                            <button className="px-4 py-2 border rounded bg-gray-200 text-gray-500">
                                Birthday Cake
                            </button>
                            <button className="px-4 py-2 border rounded bg-gray-200 text-gray-500">
                                Fruity Cereal
                            </button>
                        </div>
                    </div>

                    {/* Quantity Selector and Add to Cart Button */}
                    <div className="flex items-center mt-6">
                        <select className="border border-gray-300 rounded px-4 py-2 mr-4" value={quantity} onChange={handleQuantityChange}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                        <button className="px-8 py-2 bg-black text-white font-bold rounded" onClick={handleAddCart}>
                            ADD TO CART
                        </button>
                        <button className="px-8 py-2 bg-black text-white font-bold rounded" onClick={handleClearCart}>
                            Clear Cart
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleProductCard;
