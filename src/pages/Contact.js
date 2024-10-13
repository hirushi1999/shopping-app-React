import React, { useState }from 'react'
import CakeImage from "../asset/cakePiece.jpg"
import Footer from '../component/Footer'
import { toast } from 'react-hot-toast';
import StarRating from 'react-star-rating-component';
import ContactUs from "../asset/contact.jpg"
import { FaDoorOpen, FaAddressCard, FaLocationArrow, FaMobile  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {

  const [data, setData] = useState({
    name : "",
    designation : "",
    comment : "",
    rating : 0
  })

  const handleStarClick = (nextValue) => {
    setData((prev) => ({
      ...prev,
      rating: nextValue 
    }));
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  }

  const handleSubmit = async(e) =>{
    e.preventDefault(); 

    const {name, designation, comment, rating} = data;
    if(name && designation && comment && rating){
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/saveReview`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      
      const fetchRes = await fetchData.json();
      toast(fetchRes.message);

      setData(() => {
        return ({
          name : "",
          designation : "",
          comment : "",
          rating: 0
        })
      })
    } else{
      toast("Enter required fields");
    } 
  }

  return (
    <div className="w-full">
      <div className="relative min-h-screen w-full p-6">
        <div 
          className="absolute inset-0 bg-cover bg-center filter blur-lg" 
          style={{
            backgroundImage: `url(${ContactUs})`, 
            backgroundSize: 'cover',
          }}
        ></div>

        {/* Main Content Wrapper */}
        <div className="relative z-10">
          <h1 className='text-4xl lg:text-6xl text-black font-bold mb-6'>Visit and Contact</h1>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-10">

            {/* Left Section - Comment Form */}
            <form className="lg:w-1/2 w-full p-6 bg-white rounded-lg shadow-lg m-20 lg:mt-0" onSubmit={handleSubmit}>
              <h1 className='text-2xl text-black font-bold italic mb-4 text-center'>Leave Your Comment</h1>
              {/* Form Fields */}
              <div className="grid gap-4">
                <div>
                  <label className='block text-lg italic font-bold mb-1'>Name:</label>
                  <input 
                    type="text" 
                    name="name" 
                    className='w-full bg-red-100 p-2 text-black rounded-md focus:outline-none' 
                    placeholder="Enter your name"
                    onChange={handleOnChange}
                    value={data.name}
                  />
                </div>
                <div>
                  <label className='block text-lg italic font-bold mb-1'>Designation:</label>
                  <input 
                    type="text" 
                    name="designation" 
                    className='w-full bg-red-100 p-2 text-black rounded-md focus:outline-none' 
                    placeholder="Enter your designation"
                    onChange={handleOnChange}
                    value={data.designation}
                  />
                </div>
                <div>
                  <label className='block text-lg italic font-bold mb-1'>Comment:</label>
                  <textarea 
                    className='w-full bg-red-100 p-2 text-black rounded-md focus:outline-none' 
                    name='comment'
                    placeholder="Write your comment" 
                    onChange={handleOnChange}
                    value={data.comment}
                    rows="4">
                  </textarea>
                </div>
              </div>
              <div>
                <label className='block text-lg italic font-bold mb-1'>Rate Your Experience:</label>
                <StarRating 
                  name="rating" 
                  starCount={5} 
                  value={data.rating} 
                  onStarClick={handleStarClick} 
                  className='text-3xl text-red-100'
                />
              </div>
              <div className='text-center'>
                <button className='px-6 py-2 bg-black rounded-full text-white mt-6 hover:bg-gray-700 transition-all'>
                  Submit
                </button>
              </div>
            </form>

            {/* Right Section - Image and Details */}
            <div className="lg:w-1/2 w-full p-10 flex flex-col justify-center items-center m-20 lg:mt-0">
              <img 
                src={CakeImage} 
                alt="cakePiece" 
                className='w-4/5 rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg mb-8'
              />

              <div className='font-mono text-lg mb-8 leading-relaxed text-red-400 bg-white p-10 rounded-lg'>
                <p className='flex items-center'>
                  <FaDoorOpen className='mr-2' />
                  Open Mon-Sat: 8am to 7pm
                </p>
                <p className='flex items-center mt-4'>
                  <FaAddressCard className='mr-2'/>
                  500 Terry Francine Street
                </p>
                <p className='flex items-center mt-4'>
                  <FaLocationArrow className='mr-2'/>
                  Negombo, Sri Lanka
                </p>
                <p className='flex items-center mt-4'><FaMobile className='mr-2'/>123-456-7890</p>
                <p className='flex items-center mt-4'><MdEmail className='mr-2'/><a href="mailto:info@mysite.com" className="text-blue-600 hover:underline">info@mysite.com</a></p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-bg-slate-100 to-white">
        {/* Map Section */}
        <div className="mt-10 p-6">
          <h1 className='text-2xl text-black font-bold italic text-center mb-4'>Find Us...</h1>
          <div className='flex justify-center'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31671.01109417949!2d79.8488947848448!3d6.927078679520053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259720a7b68cf%3A0xa58c5bfc015f1f40!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1623904813126!5m2!1sen!2sus"
              width="100%" 
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className='border-2 border-black rounded-lg w-full lg:w-3/4'
              title="Colombo Map"
            ></iframe>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default Contact;
