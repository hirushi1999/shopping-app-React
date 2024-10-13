import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../asset/image.png";
import { FaCircleUser } from "react-icons/fa6";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from '../redux/userSlice';
import { NavLink } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Cart from './Cart';

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const [showMenu, setShowMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const userData = useSelector((state)=>state.user);
  
  const dispatch = useDispatch();

  const handleShowMenu = ()=> {
    setShowMenu(preve => !preve)
  }

  const handleLogout = () => {
    dispatch(logoutRedux())
  }

  const handleOpenCart = () => {
    setOpenCart(true);
  }

  const handleCloseCart = () => {
    setOpenCart(false);
  }

  return (
    <>
    <header className='fixed shadow-md w-full h-20 px-2 md:px-4 z-50 bg-white'> 
        {/* desktop */}
        <div className='flex items-center h-full justify-between'>
            <Link to={""}>
              <div className='h-20 ml-10'>
                  <img src = { logo } alt='logo' className='h-full'/>
              </div>
            </Link>

            <div className='flex items-center gap-4 md:gap-8 mr-14'>
              <nav className='flex gap-4 md:gap-9 text-base md:text-sm font-medium'>
                <ScrollToTop />
                <NavLink to={""} className={({ isActive }) => isActive ? 'text-rose-800' : 'hover:text-slate-400'}end>HOME</NavLink>
                <NavLink to={"order"} className={({ isActive }) => isActive ? 'text-rose-800' : 'hover:text-slate-400'}end>ORDER ONLINE</NavLink>
                <NavLink to={"about"} className={({ isActive }) => isActive ? 'text-rose-800' : 'hover:text-slate-400'}end>ABOUT US</NavLink>
                <NavLink to={"contact"} className={({ isActive }) => isActive ? 'text-rose-800' : 'hover:text-slate-400'}end>CONTACT US</NavLink>
              </nav>
              </div>
              <div className='flex items-center gap-4 md:gap-8 mr-14'>
              <div className='text-2xl text-slate-600 relative'  onClick={handleOpenCart}>
                <PiShoppingCartSimpleFill/>
                <div className='absolute -top-1 -right-1 text-white bg-red-500 w-4 rounded-full m-0 p-0 h-4 text-sm text-center'>{totalQuantity}</div>
              </div>
              <div className='text-slate-600 cursor-pointer' onClick={handleShowMenu}>
                <div className='text-2xl h-8 w-8'>
                  {userData.image ? <img src={userData.image} alt='userImg' className='h-full w-full overflow-hidden rounded-full drop-shadow-md'/> : <FaCircleUser />} 
                </div>
                {
                  showMenu && <div className='absolute bg-black py-2 px-2 shadow drop-shadow-md text-sm flex flex-col'>
                    {
                      userData.email === process.env.REACT_APP_ADMIN_EMAIL &&
                      <Link to={"newproduct"} className='whitespace-nowrap cursor-pointer text-white py-1 '>New Product</Link>

                    }
                  
                  {userData.email ? <p className='cursor-pointer text-red-500' onClick={handleLogout}>Logout</p> : <Link to={"login"} className='whitespace-nowrap cursor-pointer text-white'>Login</Link>}
                  
                </div>
                }
              </div>
            </div>
        </div>

        {/* mobile */}
    </header>

    {/* Modal for showing cart details */}
    {openCart && (<Cart
      isOpen={openCart}
      onClose={handleCloseCart}
    />)
  }
  </>
  )
}

export default Header