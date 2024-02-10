import React from 'react';
import { Link } from "react-router-dom";
import logo from "../asset/logo1.png";
import { FaCircleUser } from "react-icons/fa6";
import { PiShoppingCartSimpleFill } from "react-icons/pi";

const Header = () => {
  return (
    <header className='fixed shadow-md w-full h-14 px-2 md:px-4 z-50'> 
        {/* desktop */}
        <div className='flex items-center h-full justify-between'>
            <Link to={""}>
              <div className='h-14'>
                  <img src = { logo } className='h-full'/>
              </div>
            </Link>

            <div className='flex items-center gap-4 md:gap-8'>
              <nav className='flex gap-4 md:gap-9 text-base md:text-sm font-medium'>
                <Link to={""}>HOME</Link>
                <Link to={"order"}>ORDER ONLINE</Link>
                <Link to={"about"}>ABOUT US</Link>
                <Link to={"contact"}>CONTACT US</Link>
              </nav>
              <div className='text-2xl text-slate-600 relative'>
                <PiShoppingCartSimpleFill />
                <div className='absolute -top-1 -right-1 text-white bg-red-500 w-4 rounded-full m-0 p-0 h-4 text-sm text-center'>0</div>
              </div>
              <div className='text-slate-600 cursor-pointer'>
                <div className='text-2xl'>
                  <FaCircleUser /> 
                </div>
                <div className='absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md text-sm'>
                  <p className='whitespace-nowrap cursor-pointer'>New Product</p>
                  <p className='whitespace-nowrap cursor-pointer'>Login</p>
                </div>
              </div>
            </div>
        </div>

        {/* mobile */}
    </header>
  )
}

export default Header