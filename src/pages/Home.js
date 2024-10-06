import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import BirthdayCake from "../asset/birthday_slide6.png";
import WeddingCake from "../asset/wed_slide1.png"
import Cupcakes from "../asset/cupcake_slide1.png"
import Cookies from "../asset/cookies_slide.png"
import Seasonal from "../asset/season_slide.png"
import Chocolate from "../asset/choco_slide.png"
import BirthCat from "../asset/birthday_cat.jpg"
import WedCat from "../asset/wed1.jpeg"
import ClassicCat from "../asset/classic_cat.jpg"
import XmasCat from "../asset/xmas_cat.jpg"
import CupCat from "../asset/cup_cat.jpg"
import BroCat from "../asset/brownies_cat.jpg"
import { Link } from 'react-router-dom';
import Footer from '../component/Footer';
import { useNavigate } from 'react-router-dom';
import ReviewSlide from '../component/ReviewSlide';

const Home = () => {

  const navigate = useNavigate(); 

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      bgColor: 'bg-red-200',
      image: BirthdayCake, 
      title: 'Birthday Cakes',
      description: 'Discover our delightful birthday cakes, perfect for celebrating life sweetest moments! Indulge in flavors and designs that bring joy to every party.!',
      promotion: 'UP TO 20% OFF',
    },
    {
      bgColor: 'bg-cyan-200',
      image: WeddingCake,
      title: 'Wedding Cakes',
      description: 'Make your wedding day unforgettable with our elegant cakes, designed to perfectly complement your love story and celebration.',
      promotion: 'UP TO 20% OFF',
    },
    {
      bgColor: 'bg-green-300',
      image: Cupcakes,
      title: 'Cupcakes',
      description: 'Delight in our delectable cupcakes, each one a sweet treat bursting with flavor and creativity for any celebration.',
      promotion: 'BUY 1 GET 1 FREE',
    },
    {
      bgColor: 'bg-yellow-100',
      image: Cookies,
      title: 'Brownies & Cookies',
      description: 'Savor the simple pleasure of our freshly baked cookies, made with love and perfect for every occasion or a sweet moment.',
      promotion: 'UP TO 5% OFF',
    },
    {
      bgColor: 'bg-gray-200',
      image: Seasonal,
      title: 'Seasonal Cakes',
      description: 'Celebrate the magic of the season with our festive Christmas cakes, beautifully decorated and filled with holiday flavors to bring joy to your festivities.',
      promotion: 'UP TO 45% OFF',
    },
    {
      bgColor: 'bg-orange-100',
      image: Chocolate,
      title: 'Classic Cakes',
      description: 'Indulge in timeless flavors with our classic cakes, beautifully crafted to bring a touch of elegance and tradition to any celebration.',
      promotion: 'UP TO 25% OFF',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);


  const categories = [
        { id: 1, name: 'Birthday Cakes', imgSrc: BirthCat, link: '/order', type:'bdayCakes' },
        { id: 2, name: 'Wedding Cakes', imgSrc: WedCat, link: '/order', type:'weddings' },
        { id: 3, name: 'Classic Cakes', imgSrc: ClassicCat, link: '/order', type:'classic' },
        { id: 4, name: 'Seasonal Cakes', imgSrc: XmasCat, link: '/order', type:'season' },
        { id: 5, name: 'Cupcakes', imgSrc: CupCat, link: '/order', type:'cupCakes' },
        { id: 6, name: 'Brownies & Cookies', imgSrc: BroCat, link: '/order', type:'brownies' },
  ];

  const handleCategoryClick = (category) => {
    navigate(`/category`, { state: { category } }); 
  };


  return (
    <div className="py-2 bg-white">
      <div className="slideshow-container w-full h-[570px] relative">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${currentSlide === index ? 'active' : ''} ${slide.bgColor} flex flex-col md:flex-row items-center justify-between w-full h-full transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'} absolute top-0 left-0`}
          >
            <div className="md:w-1/2 w-full p-4 md:ml-24 text-center md:text-left">
              <p className="mt-20 md:mt-0 px-2 text-current text-lg font-Jost py-4 font-bold">{slide.promotion}</p>
              <h2 className="text-3xl font-bold md:text-6xl font-lobster italic text-black">{slide.title}</h2>
              <p className="mt-8 py-3 text-base text-slate-500 mb-3 font-semiboldds">{slide.description}</p>
              <Link to="/order">
                <button className="font-bold bg-black text-white px-4 py-2 rounded-md mb-5">
                Shop Now
                </button>
              </Link>
            </div>
            <div className="md:w-1/2 w-full h-1/3 md:h-full md:p-8 overflow-hidden relative">
              <img src={slide.image} alt="Cake" className='w-full h-full object-contain'/>
            </div>
          </div>
        ))}
      </div>
      <br/>
      <div className='flex flex-col items-center mt-10'>
        <h3 className='font-bold text-3xl text-center'>Our Products</h3>
        <p className='text-base text-slate-500 mb-5'>Get our great quality products in our official store today</p>

        <div className="mt-5 w-full flex flex-col items-center gap-10">
            <div className="w-full sm:w-2/3 flex flex-col sm:flex-row gap-6 sm:max-h-80 h-auto">
                {categories.slice(0, 3).map((category) => (
                    <div
                        to={category.link}
                        key={category.id}
                        className="relative w-full sm:w-1/3 overflow-hidden cursor-pointer"
                        onClick={() => handleCategoryClick(category)}
                    >
                        <img
                            src={category.imgSrc}
                            alt={category.name}
                            className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-125 rounded"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2 text-lg italic font-bold">
                            {category.name}
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full sm:w-2/3 flex flex-col sm:flex-row gap-6 sm:max-h-80 ">
                {categories.slice(3, 6).map((category) => (
                    <div
                        to={category.link}
                        key={category.id}
                        className="relative w-full sm:w-1/3 overflow-hidden cursor-pointer"
                        onClick={() => handleCategoryClick(category)}
                    >
                        <img
                            src={category.imgSrc}
                            alt={category.name}
                            className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-125 rounded"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2 text-lg italic font-bold">
                            {category.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
      <div className="mt-20 mb-20">
        <ReviewSlide />
      </div>
      <div className=''>
      <Footer/>
      </div>
    </div>
  )
}

export default Home;