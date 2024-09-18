import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Customer from "../asset/review.jpg"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaStar, FaRegStar } from "react-icons/fa";  // Import solid and regular star icons
import { useSelector } from 'react-redux'

const ReviewSlider = () => {

  const reviewData = useSelector((state) => state.review.reviewList);
  console.log(reviewData);

  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // Show three cards at a time
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // Adjust for smaller screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-20 h-auto w-full bg-cover bg-center py-10"
      style={{ backgroundImage: `url(${Customer})` }}>
      <h3 className='font-bold text-4xl text-center text-pink-600 mb-8'>Why do people love us...</h3>
      <div className='ml-10 mr-10'>
        <Slider {...settings}>
          {reviewData.length > 0 ? reviewData.map((review, index) => (
            <div key={index} className="p-4">
              <div className="bg-gradient-to-r from-pink-100 to-pink-200 border p-6 rounded-lg shadow-xl">
                {/* Stars for rating */}
                <div className="flex mb-4">
                  {Array.from({ length: 5 }, (_, i) => (
                    i < review.rating ? (
                      <FaStar key={i} className="text-yellow-400" />  // Filled star
                    ) : (
                      <FaRegStar key={i} className="text-gray-300" />  // Empty star
                    )
                  ))}
                </div>
                {/* Cake comment */}
                <p className="mt-2 text-gray-700 italic mb-6">"{review.comment}"</p>
                {/* Name and designation */}
                <h4 className="font-bold text-2xl text-pink-700">{review.name}</h4>
                <p className="text-sm text-gray-500">{review.designation}</p>
              </div>
            </div>
           )) : <p>Loading reviews...</p>} 
        </Slider>
      </div>
    </div>
  );
};

// Custom next arrow
const NextArrow = ({ onClick }) => {
  return (
    <div 
      className="absolute top-1/2 right-[-25px] transform -translate-y-1/2 bg-gray-100 rounded-full p-2 cursor-pointer shadow-lg hover:bg-gray-300"
      onClick={onClick}
    >
      <IoIosArrowForward className="text-lg text-black" /> 
    </div>
  );
};

// Custom previous arrow
const PrevArrow = ({ onClick }) => {
  return (
    <div 
      className="absolute top-1/2 left-[-25px] transform -translate-y-1/2 bg-gray-100 rounded-full p-2 cursor-pointer shadow-lg hover:bg-gray-300 z-10"
      onClick={onClick}
    >
      <IoIosArrowBack className="text-lg text-black" /> 
    </div>
  );
};

export default ReviewSlider;
