import React from 'react'
import profile from '../assets/profile.png';


const Buyer = () => {
  return (
    <div className='flex flex-col w-full h-full'>
            <div className='flex flex-row-reverse'>
                <div className='m-[10px] mr-[20px] text-lg'><img src={profile} alt=""></img></div>
                <div className='m-[30px] text-xl font-semibold'>Name</div>
            </div>
            <div className='p-[30px] m-[10px] flex flex-row justify-around items-center'>

                <label className='m-[10px]'>
                <span className='text-lg '>Enter the recipes you want to buy </span><br/>
                <input className='form_input' name="recipe" placeholder="Enter the recipes" type='text' /><br/>
                
                </label>

                    <div className='flex flex-row items-center w-[50%]'>
                        <div className='text-lg bg-[#ecf0f3] p-[10px] m-[10px] w-[50%] rounded-[12px]'>Your location</div>
                        <div className=' bg-[#D2042D] inline absolute ml-[17rem] p-[10px] m-[10px] rounded-[12px] text-white text-lg font-semibold cursor-pointer w-fit h-fit'>Click here</div>
                    </div>
            </div>
            <div>
                
            </div>
    </div>
  )
}

export default Buyer