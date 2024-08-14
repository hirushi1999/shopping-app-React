import React, { useState, useEffect } from "react";
import HomeCard from "../component/HomeCard";
import { useSelector } from "react-redux";
import BirthdayCake from "../asset/birthday_slide.jpg";
import WeddingCake from "../asset/wed_slide.jpg";
import Cupcakes from "../asset/cupcake_slide.jpg";
import Cookies from "../asset/cookies_slide.jpg";
import Seasonal from "../asset/season_slide.jpg";
import Chocolate from "../asset/choco_slide.jpg";
import BirthCat from "../asset/birthday_cat.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  console.log(productData);
  const homeProductCartList = productData.slice(0, 4);

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      bgColor: "bg-red-300",
      image: BirthdayCake, // Replace with actual image paths
      title: "Birthday Cakes",
      description:
        "Discover our delightful birthday cakes, perfect for celebrating life sweetest moments! Indulge in flavors and designs that bring joy to every party.!",
      promotion: "UP TO 20% OFF",
    },
    {
      bgColor: "bg-cyan-200",
      image: WeddingCake,
      title: "Wedding Cakes",
      description:
        "Make your wedding day unforgettable with our elegant cakes, designed to perfectly complement your love story and celebration.",
      promotion: "UP TO 20% OFF",
    },
    {
      bgColor: "bg-green-300",
      image: Cupcakes,
      title: "Cupcakes",
      description:
        "Delight in our delectable cupcakes, each one a sweet treat bursting with flavor and creativity for any celebration.",
      promotion: "BUY 1 GET 1 FREE",
    },
    {
      bgColor: "bg-yellow-200",
      image: Cookies,
      title: "Brownies & Cookies",
      description:
        "Savor the simple pleasure of our freshly baked cookies, made with love and perfect for every occasion or a sweet moment.",
      promotion: "UP TO 5% OFF",
    },
    {
      bgColor: "bg-teal-300",
      image: Seasonal,
      title: "Seasonal Cakes",
      description:
        "Celebrate the magic of the season with our festive Christmas cakes, beautifully decorated and filled with holiday flavors to bring joy to your festivities.",
      promotion: "UP TO 45% OFF",
    },
    {
      bgColor: "bg-orange-300",
      image: Chocolate,
      title: "Classic Cakes",
      description:
        "Indulge in timeless flavors with our classic cakes, beautifully crafted to bring a touch of elegance and tradition to any celebration.",
      promotion: "UP TO 25% OFF",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const categories = [
    {
      id: 1,
      name: "Birthday Cakes",
      imgSrc: BirthCat,
      link: "/categories/birthday-cakes",
    },
    {
      id: 2,
      name: "Wedding Cakes",
      imgSrc: "path/to/wedding-cake.jpg",
      link: "/categories/wedding-cakes",
    },
    {
      id: 3,
      name: "Classic Cakes",
      imgSrc: "path/to/classic-cake.jpg",
      link: "/categories/classic-cakes",
    },
    {
      id: 4,
      name: "Christmas Cakes",
      imgSrc: "path/to/christmas-cake.jpg",
      link: "/categories/christmas-cakes",
    },
    {
      id: 5,
      name: "Cupcakes",
      imgSrc: "path/to/cupcakes.jpg",
      link: "/categories/cupcakes",
    },
    {
      id: 6,
      name: "Specialty Cakes",
      imgSrc: "path/to/specialty-cake.jpg",
      link: "/categories/specialty-cakes",
    },
  ];

  return (
    <div className="py-2 bg-white">
      <div className="slideshow-container w-full h-[600px] relative">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${currentSlide === index ? "active" : ""} ${
              slide.bgColor
            } flex flex-col md:flex-row items-center justify-between w-full h-full transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            } absolute top-0 left-0`}
          >
            <div className="md:w-1/2 w-full p-4 md:ml-24 text-center md:text-left">
              <p className="mt-20 md:mt-0 px-2 text-current text-sm font-Jost py-4 font-bold">
                {slide.promotion}
              </p>
              <h2 className="text-3xl font-bold md:text-6xl font-lobster italic text-black">
                {slide.title}
              </h2>
              <p className="mt-8 py-3 text-base text-slate-500 text-sm mb-3">
                {slide.description}
              </p>
              <button className="font-bold bg-black text-white px-4 py-2 rounded-md mb-5">
                Shop Now
              </button>
            </div>
            <div className="md:w-1/2 w-full h-full md:p-10">
              <img
                src={slide.image}
                alt="Cake"
                className="h-full w-full object-cover rounded"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center mt-10">
        <h3 className="font-bold text-3xl text-center">Our Products</h3>
        <p className="text-base text-slate-500 mb-5">
          Get our great quality products in our official store today
        </p>

        <div className="mt-5 w-full flex flex-col items-center gap-4">
          <div className="w-2/3 flex gap-6">
            {categories.slice(0, 3).map((category) => (
              <Link
                to={category.link}
                key={category.id}
                className="relative w-1/3 overflow-hidden cursor-pointer"
              >
                <img
                  src={category.imgSrc}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-125 rounded"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-5 text-lg italic font-bold">
                  {category.name}
                </div>
              </Link>
            ))}
          </div>
          <div className="w-2/3 flex gap-6">
            {categories.slice(3, 6).map((category) => (
              <Link
                to={category.link}
                key={category.id}
                className="relative w-1/2 overflow-hidden cursor-pointer"
              >
                <img
                  src={category.imgSrc}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2">
                  {category.name}
                </div>
              </Link>
            ))}
          </div>
          {/* {homeProductCartList[0] && homeProductCartList.map((e1) => (
            <HomeCard
              key={e1._id}
              image={e1.image}
              name={e1.name}
              price={e1.price}
              category={e1.category}
            />
          ))} */}
        </div>

        <div className=""></div>
      </div>
    </div>
  );
};

export default Home;
