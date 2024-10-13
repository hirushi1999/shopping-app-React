import React, { useState } from 'react';
import { IoClose } from "react-icons/io5"; 

const Checkout = ({ isOpen, onClose, total }) => {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    address: '',
    mobile: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('card'); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({
      ...customerInfo,
      [name]: value,
    });
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (!isOpen) return null; // Don't render the modal if `isOpen` is false

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="relative bg-white w-full max-w-lg p-8 rounded-lg shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          <IoClose size={24} />
        </button>

        <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>

        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={customerInfo.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* Address Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={customerInfo.address}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* Mobile Number Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">
              Mobile Number
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={customerInfo.mobile}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* Payment Method Selection */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Select Payment Method</h2>
            <div className="flex justify-start">
              <button
                type="button"
                className={`px-4 py-2 rounded-lg mr-4 ${paymentMethod === 'card' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                onClick={() => handlePaymentMethodChange('card')}
              >
                MasterCard / Visa
              </button>
              <button
                type="button"
                className={`px-4 py-2 rounded-lg mr-4 ${paymentMethod === 'ipay' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                onClick={() => handlePaymentMethodChange('ipay')}
              >
                iPay
              </button>
              <button
                type="button"
                className={`px-4 py-2 rounded-lg ${paymentMethod === 'mobile' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                onClick={() => handlePaymentMethodChange('mobile')}
              >
                Mobile Banking
              </button>
            </div>
          </div>

          {/* Total Amount Display */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-center">Total: Rs. {total}</h3>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-6 rounded-lg mt-4 hover:bg-green-700 transition"
            >
              Confirm and Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
