import React from 'react'
import logo from '../assets/logo/logo.png'

const Navbar = () => {
  return (
    <div className='relative flex justify-between flex-row items-center w-full h-28  text-black '>
      <img src={logo} alt="Logo" className='w-[13rem] cursor-pointer  ml-3' />
      <div className='flex flex-row justify-between '>
          <div className='m-[10px] text-[22px] cursor-pointer font-semibold hover:text-[#D2042D]'>Contact</div>
          <div className='m-[10px] mr-6 text-[22px] cursor-pointer font-semibold hover:text-[#D2042D]'>About</div>
      </div>
    </div>
  )
}

export default Navbar;