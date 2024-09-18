import React from 'react';
import ChefImage from "../asset/chef.jpg";
import Footer from '../component/Footer';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='bg-gradient-to-b from-white to-amber-300 pt-20'> 
    {/* Main Content Wrapper */}
      <div className='md:flex md:justify-between md:ml-24 px-4 lg:px-0'>

        {/* Our Story */}
        <div className='md:w-1/3'>
          <h3 className='text-3xl font-bold md:text-6xl mb-10 text-blue-800'>Our Story</h3>
          <p className='text-blue-900 text-lg md:text-xl leading-relaxed'  style={{ fontFamily: 'Moderustic' }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <br/>
          <p className='text-blue-900 text-lg md:text-xl leading-relaxed' style={{ fontFamily: 'Moderustic' }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.
          </p>
          <br/>
          <Link to="/contact">
            <button className='bg-blue-800 px-6 py-2 text-white rounded-full hover:bg-blue-700 transition duration-300'>
              Contact Me
            </button>
          </Link>
        </div>

        {/* Chef Image */}
        <div className='md:w-1/2 relative mt-10 md:mt-0 md:mr-10 w-full'>
          <img src={ChefImage} alt="Chef" className="w-2/3 h-2/3 object-cover rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105" />
        </div>
      </div>

      {/* Mission */}
      <div className="pb-20 px-6 md:px-20 bg-amber-200 text-center">
        <h2 className="text-3xl md:text-5xl text-blue-800 font-bold mb-6">Our Mission</h2>
        <p className="text-blue-900 text-lg md:text-xl max-w-3xl mx-auto" style={{ fontFamily: 'Moderustic' }}>
          Our mission is to provide high-quality, delicious food that satisfies both the soul and the taste buds. We believe in crafting meals that bring joy to our customers and using only the freshest ingredients.
        </p>
      </div>
      
      <Footer/>
    </div>
  );
};

export default About;
