import React from 'react'
import logo from "../asset/logo1.png"

const Header = () => {
  return (
    <header className='fixed shadow-md w-full h-16 px-2 md:px-4'>
        {/* desktop */}
        <div className='flex items-center h-full'>
            <div className='h-16'>
                <img src = { logo } className='h-full'/>
            </div>
        </div>

        {/* mobile */}
    </header>
  )
}

export default Header