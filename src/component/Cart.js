import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleQuantityChange = (item, quantity) => {
    if (quantity >= 1) {
      dispatch(updateQuantity({ ...item, quantity }));
    }
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="bg-white p-4 rounded-lg shadow-lg max-w-xl mx-auto">
          {cartItems.map((item) => (
            <div key={item.name} className="flex items-center justify-between border-b border-gray-300 py-4">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg mr-4" />
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
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
                  readOnly
                />

                {/* Remove button */}
                <button
                  onClick={() => handleRemoveItem(item)}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg ml-4 hover:bg-red-700 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total Price */}
          <div className="text-right mt-8">
            <h3 className="text-2xl font-bold mb-10">Total: Rs. {totalAmount}</h3>
            <Link to="/checkout" className="bg-green-500 text-white py-2 px-6 rounded-lg mt-4 hover:bg-green-700 transition">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
