import React from 'react';
import { Link } from "react-router-dom";
import logo from "../asset/logo1.png";
import { FaUser } from "react-icons/fa6";
import { PiShoppingCartSimpleFill } from "react-icons/pi";

const Header = () => {
  return (
    <header className='fixed shadow-md w-full h-14 px-2 md:px-4'>
        {/* desktop */}
        <div className='flex items-center h-full justify-between'>
            <Link to={""}>
              <div className='h-14'>
                  <img src = { logo } className='h-full'/>
              </div>
            </Link>

            <div className='flex items-center gap-4 md:gap-7'>
              <nav className='flex gap-4 md:gap-7 text-base md:text-md font-medium'>
                <Link to={""}>HOME</Link>
                <Link to={"cakes"}>CAKES</Link>
                <Link to={"about"}>ABOUT US</Link>
                <Link to={"contact"}>CONTACT US</Link>
              </nav>
              <div className='text-1.9xl text-slate-600'>
                <PiShoppingCartSimpleFill />
              </div>
              <div className='text-1.5xl text-slate-600'>
                <FaUser />
              </div>
            </div>
        </div>

        {/* mobile */}
    </header>
  )
}

export default Header