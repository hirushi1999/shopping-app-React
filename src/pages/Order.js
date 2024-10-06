import React, { useState } from 'react';
import Footer from '../component/Footer';
import HomeCard from '../component/HomeCard';
import { useSelector } from 'react-redux';

const Order = () => {
  const productData = useSelector((state) => state.product.productList);
  console.log(productData);
  const [selectedCategory, setSelectedCategory] = useState('other');

  const filteredProducts = selectedCategory === 'other' ? productData : productData.filter((product)=>product.category === selectedCategory);
  
  const handleOnChange = (event) => {
    setSelectedCategory(event.target.value);
  }

  return (
    <div>
      <div className='p-10 px-10 text-center'>
        <div className='flex justify-center items-center space-x-2'>
          <select
            className='bg-slate-300 p-2 text-lg font-semibold border-b-2 border-black focus:outline-none transition duration-200 ease-in-out w-64'
            id="category"
            name='category'
            value={selectedCategory}
            onChange={handleOnChange}
          >
            <option value="other" disabled>Select Your Category</option>
            <option value="bdayCakes">
              🎂 Birthday Cakes
            </option>
            <option value="weddings">
              💍 Wedding Cakes
            </option>
            <option value="cupCakes">
              🧁 Cupcakes
            </option>
            <option value="brownies">
              🍪 Brownies & Cookies
            </option>
            <option value="season">
              🍂 Seasonal Cakes
            </option>
            <option value="classic">
              🍰 Classic Cakes
            </option>
          </select>
        </div>
    </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mx-4 sm:mx-8 md:mx-16 mb-10'>
        {filteredProducts.map((product) => (
          <HomeCard
            key={product._id}
            image={product.image}
            name={product.name}
            price={product.price}
            category={product.category}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Order;
