import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import toast from "react-hot-toast";
import { useDispatch } from 'react-redux'; 
import { addToCart } from '../redux/cartSlice';

const Product = ({ product, isOpen, onClose  }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  if(!isOpen) return null;

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= 1) setQuantity(value); 
  };

  const handleAddToCart = () =>{
    dispatch(addToCart({
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.image,
    }));
    toast.success(`Added ${quantity} item(s) to cart`);
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-4xl w-full relative">
        {/* Close button */}
        <button
          className="bg-gray-300 text-black absolute top-2 right-2 py-1 px-2 rounded hover:bg-gray-400"
          onClick={onClose}
        >
          <IoClose />
        </button>

        <div className="flex flex-col md:flex-row items-center">
          {/* Enlarged image */}
          <div className="w-full md:w-2/3 pr-0 md:pr-4 mb-6 md:mb-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Product details and quantity selection */}
          <div className="w-full md:w-1/3 pl-0 md:pl-4">
            <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
            <p className="text-gray-700 mb-2 capitalize">
              Category: <span className='font-bold'>{product.category}</span>
            </p>
            <p className="text-gray-700 font-bold mb-6">
              Price(1item): Rs. <span className='text-red-500'>{product.price}</span>
            </p>

            {/* Quantity Input */}
            <div className="flex items-center mb-4">
              <label className="mr-2 font-semibold">Quantity:</label>
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-16 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="1"
              />
            </div>

            {/* Add to Cart button */}
            <button
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-800 transition-colors"
              // onClick={() => toast.success(`Added ${quantity} item(s) to cart`)}
              onClick={handleAddToCart}
            >
              Add {quantity} to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product