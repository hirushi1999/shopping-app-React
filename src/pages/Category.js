import React from 'react'
import { useLocation } from 'react-router-dom';
import HomeCard from '../component/HomeCard';
import { useSelector } from 'react-redux';
import Footer from '../component/Footer';

const Category = () => {
    const location = useLocation();
    const { category } = location.state;
    const productData1 = useSelector((state) => state.product.productList);

  return (
    <div>
        <div className='p-20 px-10'>
        <h1 className="text-blue-900 text-3xl font-bold mb-10">{category.name}</h1>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mx-4 sm:mx-8 md:mx-16 mb-10'>
            {productData1
                .filter(product => product.category === category.type) 
                .map((product) => (
                    <HomeCard
                        key={product._id}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        category={product.category}
                    />
                ))}
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Category