import React, { useState } from 'react'
import loginSignupImage from "../asset/login1.gif"
import { BiSolidShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";

const SignUp = () => {
  return ( 
    <div className='p-3 md:p-4'>
        <div className='w-full max-w-sm bg-white m-auto flex flex-col p-4'>
            {/* <h1 className='text-center text-2xl font-bold'>Sign Up</h1> */}
            <div className='w-16 overflow-hidden rounded-full drop-shadow-md shadow-md items-center m-auto'>
                <img src={loginSignupImage} className='w-full'/>
            </div>

            <form className='w-full py-3 flex flex-col'>
                <label htmlFor='firstName'>First Name</label>
                <input type={"text"} id="firstName" name="firstName" className='mt-1 mb-2 w-full bg-slate-300 p-1 px-2 py-1 rounded focus-within:outline-blue-400'/>

                <label htmlFor='lastName'>Last Name</label> 
                <input type={"text"} id="lastName" name="lastName" className='mt-1 mb-2 w-full bg-slate-300 p-1 px-2 py-1 rounded focus-within:outline-blue-400'/>

                <label htmlFor='email'>Email</label> 
                <input type={"email"} id="email" name="email" className='mt-1 mb-2 w-full bg-slate-300 p-1 px-2 py-1 rounded focus-within:outline-blue-400'/>

                <label htmlFor='password'>Password</label>
                <input type={"password"} id="password" name="password" className='mt-1 mb-2 w-full bg-slate-300 p-1 px-2 py-1 rounded focus-within:outline-blue-400'/>

                <label htmlFor='confirmpassword'>Confirm Password</label> 
                <input type={"password"} id="confirmpassword" name="password" className='mt-1 mb-2 w-full bg-slate-300 p-1 px-2 py-1 rounded focus-within:outline-blue-400'/>

                <button className='w-full max-w-[150px] m-auto bg-blue-400 hover:bg-blue-600 cursor-pointer text-xl font-medium text-center text-white py-1 rounded-full'>Sign Up</button>
            </form>
            <p className='text-left text-sm'>Already have account? <Link to={"login"} className='text-blue-600 underline'>Login</Link></p>
        </div>
    </div>
  )
}

export default SignUp