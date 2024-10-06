import React, { useState } from 'react';

const Checkout = () => {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    address: '',
    mobile: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('card'); // State for selected payment method

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
    // Here you would send the customerInfo to your backend or handle payment processing
    console.log('Customer Info:', customerInfo);
    console.log('Payment Method:', paymentMethod);
  };

  const totalPrice = 5000; // Example total price (can be dynamically fetched or calculated)

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-xl mx-auto">
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
  );
};

export default Checkout;
