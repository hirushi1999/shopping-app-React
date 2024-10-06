import React, { useState } from 'react';
import { FaCartArrowDown, FaSearch } from "react-icons/fa";
import Product from './Product';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const HomeCard = ({ name, image, category, price }) => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenProduct = () =>{
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  const handleAddToCart = () =>{
    dispatch(addToCart({ name, image, price, quantity: 1}));
  }

  return (
    <>
    <div className='relative font-sans bg-slate-100 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out group'>
      <div className='w-full h-130px mb-4 flex justify-center items-center relative'>
        <img 
          src={image} 
          alt={name} 
          className='object-contain transform transition-transform duration-300 ease-in-out hover:scale-110' 
        />
      </div>
      {/* Wrap the name and price in a container for hover effect */}
      <div className='relative'>
        <h3 className='font-semibold text-slate-600 text-center capitalize text-base mb-2 group-hover:opacity-0 group-hover:blur-sm transition-opacity transition-blur duration-300 ease-in-out'>{name}</h3>
        <p className='text-center font-bold mb-2 group-hover:opacity-0 group-hover:blur-sm transition-opacity transition-blur duration-300 ease-in-out'>
          <span className='text-red-500'>Rs.</span><span>{price}</span>
        </p>
        
        {/* Icons section */}
        <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
          <button 
            onClick={handleAddToCart}
            className='p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition-colors duration-300 ease-in-out flex items-center justify-center mx-4'
            title="Add to Cart"
          >
            <FaCartArrowDown className='text-gray-600 text-3xl' />
          </button>
          <button 
            onClick={handleOpenProduct}
            className='p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition-colors duration-300 ease-in-out flex items-center justify-center mx-2'
            title="Search Item"
          >
            <FaSearch className='text-gray-600 text-3xl'/>
          </button>
        </div>
      </div>
    </div>
    {/* Modal for showing product details */}
    {isModalOpen && (<Product
        product={{ name, image, category, price }}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />)
    }
    </>
  );
}

export default HomeCard;
