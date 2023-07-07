import React from 'react'
import Navbar from './Navbar';
import logoGif from '../assets/logo/NearTreat.gif';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Navbar />
     <div className='flex tablet:flex-row flex-col relative w-full h-full justify-center items-center'>
        <div className='w-[80%] m-[40px] tablet:m-[50px] p-[10px] tablet:w-[50%]'>
          <h1 className=' text-6xl font-semibold m-[10px]'><span className='text-[#D2042D]'>NearTreat </span>
          The Ultimate Solution for <span className='text-[#edbb3e]'>Street Food Lovers</span></h1>
          <p className='m-[10px] mt-[25px] text-left '>Welcome to NearTreat, the Web Application that solves the problem of locating street food vendors.
          Our app provides live location tracking and availability of recipes, making it easy for customers to find their favorite street vendors.</p>
            
            <Link className='cursor-pointer text-[#D2042D] m-[10px] mt-[20px]  text-xl' to="/login">Login here..!</Link>

            <div className='flex flex-row'>
            <div className=' cursor-pointer text-white bg-[#D2042D] p-[10px]  m-[10px]  rounded-[12px] w-fit text-xl font-semibold hover:text-[#edbb3e] px-12'>Get Started</div>
            <a className='text-[#D2042D] m-[10px] text-center flex items-center text-xl font-semibold' href="https://youtu.be/RePyIW0sx4g">Watch demo video</a>
            </div>
            
        </div>
        <div className='w-[50%] tablet:flex justify-center items-center  hidden'>
            <img src={logoGif} alt="Logo Gif" />
        </div>
     </div>
     
    </div>
  )
}

export default Home;