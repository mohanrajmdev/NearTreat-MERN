import React from 'react'
import profile from '../assets/profile.png';
import Info from './Info';


const Buyer = () => {
  return (
    <div className='flex flex-col w-full h-full'>

            <div className='flex flex-row-reverse'>
                <div className='m-[10px] mr-[20px] text-lg'><img src={profile} alt=""></img></div>
                <div className='m-[30px] text-xl font-semibold'>Name</div>
            </div>

            <div className='p-[30px] m-[10px] flex tablet:flex-row flex-col justify-evenly items-center tablet:items-end w-full'>

                <label className='m-[10px] flex flex-col justify-center items-center tablet:w-[30%]'>

                <span className='text-lg '>Enter the recipes you want to buy </span><br/>
                <input className='form_input' name="recipe" placeholder="Enter the recipes" type='text' /><br/>
                
                </label>

                <div className='flex flex-row justify-between items-end bg-[#ecf0f3] tablet:w-[25%] m-[10px] rounded-[12px] shadow-[0px_10px_10px_10px_#00000024]'>
                    <div className='text-lg p-[10px] '>Your location</div>
                    <div className=' bg-[#D2042D] p-[10px] rounded-[12px] text-white text-lg font-semibold cursor-pointer w-fit h-fit'>Click here</div>
                </div>
            </div>

            <div className='tablet:w-[60%] h-full p-[30px] mx-auto w-[100%]'>

                  <div className= ' border-[3px] p-[5px] m-[6px] flex justify-evenly bg-white rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg' >
                    <th className=' p-[5px]'>Name</th>
                    <th className=' p-[5px]'>Stall type</th>
                    <th className=' p-[5px]'>Seller Location</th>
                  </div>
                  <Info name={"Naveen"} stalltype={"pushcart"}/>
                  <Info name={"Naveen"} stalltype={"pushcart"}/>
                  <Info name={"Naveen"} stalltype={"pushcart"}/>
                  <Info name={"Naveen"} stalltype={"pushcart"}/>
                  <Info name={"Naveen"} stalltype={"pushcart"}/>
                  <Info name={"Naveen"} stalltype={"pushcart"}/>
                
                
            </div>
    </div>
  )
}

export default Buyer