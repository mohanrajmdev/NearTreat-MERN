import React from 'react'
import profile from '../assets/profile.png';

const Profile = () => {
  return (
    <div className='flex flex-col w-full h-full'>
        <div className='flex flex-row-reverse'>
            <div className='m-[10px] mr-[20px] text-lg'><img src={profile} alt=""></img></div>
            <div className='m-[30px] text-xl font-semibold'>Name</div>
        </div>
        <div className='p-[30px] mt-[50px] flex flex-row'>
            <div className='w-[50%] h-full flex flex-col text-left ml-[50px]'>
                <div className='text-lg text-left m-[10px]'>Update Current Location</div>
                <div className=' bg-[#D2042D] p-[10px] m-[10px] rounded-[30px] text-white text-lg font-semibold cursor-pointer w-fit'>Click Here</div>
                <div className='text-lg text-left m-[10px]'>Update Available Menu</div>
                <label className='m-[10px]'>
                    <input className='form_input' name="recipe" placeholder="Enter the recipes" type='text' /><br/>
                    <span className='text-sm '>* Enter the recipes you want to buy separated by comma(,)</span>
                </label>
            </div>
            <div className='main'>
            <div className='w-[50%] h-full flex flex-col text-left text-xl'>
                    <div className='m-[10px]'>Name</div>
                    <div className='m-[10px]'>Email</div>
                    <div className='m-[10px]'>Mobile Number</div>
                    <div className='m-[10px] text-red-600'>Forget Password?</div>
            </div>
            </div>

            
        </div>
    </div>
  )
}

export default Profile;