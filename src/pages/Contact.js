import React, { useState }from 'react'
import CakeImage from "../asset/cakePiece.jpg"
import Footer from '../component/Footer'
import { toast } from 'react-hot-toast';
import StarRating from 'react-star-rating-component';

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
    console.log(data);

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
      console.log(fetchRes);
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
      toast("Enter required fiels");
    } 
  }

  return (
    <div>
      <div className='bg-gradient-to-b from-white to-red-300 min-h-screen w-full p-6'>
      <h1 className='text-4xl lg:text-6xl text-black font-bold mb-6'>Visit and Contact</h1>
        {/* Main Content Wrapper */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-10">
          
          {/* Left Section - Contact Info */}
          <div className="lg:w-1/3 w-full p-5">
            <div className='font-mono text-lg mb-8 leading-relaxed'>
              <p>Open Mon-Sat: 8am to 7pm</p>
              <p className='mt-6'>500 Terry Francine Street</p>
              <p>Negombo, Sri Lanka</p>
              <p className='mt-6'>123-456-7890</p>
              <p><a href="mailto:info@mysite.com" className="text-blue-600 hover:underline">info@mysite.com</a></p>
            </div>
          </div>

          {/* Center Section - Comment Form */}
          <form className="lg:w-1/3 w-full p-6 bg-white rounded-lg shadow-lg mt-10 lg:mt-0"  onSubmit={handleSubmit}>
            <h1 className='text-2xl text-black font-bold italic mb-4 text-center'>Leave Your Comment</h1>
            <div className="grid gap-4">
              <div>
                <label className='block text-lg italic font-bold mb-1'>Name:</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
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
                  id="designation" 
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
              {/* Star rating component */}
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

          {/* Right Section - Image */}
          <div className="lg:w-1/3 w-full p-10 flex justify-center items-center mt-10 lg:mt-0">
            <img 
              src={CakeImage} 
              alt="cakePiece" 
              className='w-full rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg'
            />
          </div>

        </div>

        {/* Map Section */}
        <div className="mt-10">
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
      </div>
      <Footer />
    </div>
  )
}

export default Contact
