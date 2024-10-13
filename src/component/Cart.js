import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';
import { IoClose } from "react-icons/io5";
import Checkout from './Checkout';

const Cart = ({isOpen, onClose}) => {
  const cartItems = useSelector((state) => state.cart.items);
  const [openCheckout, setOpenChecout] = useState(false);
  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleQuantityChange = (item, quantity) => {
    if (quantity >= 1) {
      dispatch(updateQuantity({ ...item, quantity }));
    }
  };

  const handleCheckout = () => {
    setOpenChecout(true);
  }

  const handleCloseCheckout = () => {
    setOpenChecout(false);
  }

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
  <>
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40 mt-22">
      <div className='absolute top-16 right-0 w-1/3 sm:w-1/2 md:w-1/4 h-full bg-white p-4 shadow-lg z-50 transition-transform transform translate-x-0'>
      <button
        onClick={onClose}
        className="absolute top-6 right-4 text-gray-600 hover:text-gray-900"
      >
        <IoClose />
      </button>
      <h1 className="text-3xl font-bold mt-4 text-center">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className='mt-4'>Your cart is empty.</p>
      ) : (
        <div className="overflow-y-auto max-h-[calc(100vh-200px)] p-4 rounded-lg">
          {cartItems.map((item) => (
            <div key={item.name} className="flex items-center justify-between border-b border-gray-300 py-4">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg mr-1" />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">Price: Rs. {item.price}</p>
                </div>
              </div>

              <div className="flex items-center">
                {/* Quantity Input */}
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item, parseInt(e.target.value))}
                  className="w-16 p-2 border border-gray-300 rounded-lg text-center"
                  min="1"
                />

                {/* Remove button */}
                <button
                  onClick={() => handleRemoveItem(item)}
                  className="bg-red-500 text-white py-2 px-2 rounded-lg ml-2 hover:bg-red-700 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total Price */}
          <div className="text-right mt-8">
            <h3 className="text-2xl font-bold mb-10">Total: Rs. {totalAmount}</h3>
            <div className="text-right mt-8 flex justify-center">
              <button className="bg-green-500 text-white py-2 px-6 rounded-lg mt-2 hover:bg-green-700 transition" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
    {openCheckout && (<Checkout isOpen={openCheckout} onClose={handleCloseCheckout} total={totalAmount}/>)}
    </>
  );
};

export default Cart;
