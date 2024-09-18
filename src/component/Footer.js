import React, { useState } from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { toast } from 'react-hot-toast';

const Footer = () => {
  const [email, setEmail] = useState("");

  const subscribeEmail = async(e) =>{
    e.preventDefault(); 
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/subscribeEmail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message || "Subscribed successfully!");
        setEmail("");  
      } else {
        toast.error(result.message || "Subscription failed");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className='bg-white'>
        <hr/>
        <h3 className='mt-5 font-bold text-2xl text-center font-serif'>Subscribe our newsletter for some sweet stuff</h3>
        <form className='text-center mt-4' onSubmit={subscribeEmail}>
            <input type="email" className='border-gray-400 rounded-l-full bg-gray-200 text-gray-5s00 p-3 w-80 mb-4 sm:mb-0 focus:outline-none' placeholder='Your Email Address...' id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <button className='rounded-r-full bg-black px-4 py-3 font-semibold italic text-white'>Subscribe</button>
        </form>
        <div className='mt-8 items-center'>
          <h3 className='mt-5 font-bold text-xl text-center'>Follow us:</h3>
          <div className='flex justify-center mt-1 text-3xl cursor-pointer'>
          <p className='mr-5'><FaFacebook /></p><p className='mr-5'><FaTwitter /></p><p><FaInstagram /></p>
          </div>
          <p className='text-sm text-center mt-6 mb-2'>© 2024 by Cake. Powered and secured by Hiru</p>
        </div>
    </div>
  )
}

export default Footer