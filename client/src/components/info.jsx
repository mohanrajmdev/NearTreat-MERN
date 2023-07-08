import React from 'react'

const Info = ({name,stalltype}) => {
  return (
        <div className= 'items-center border-[3px] p-[5px] m-[6px] flex justify-evenly bg-white rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg'>
                    <td className=' p-[5px]'>{name}</td>
                    <td className=' p-[5px]'>{stalltype}</td>
                    <div className=' bg-[#D2042D]  p-[10px] rounded-[12px] text-white text-lg font-semibold cursor-pointer w-fit h-fit'>Click here</div>
          </div>
  )
}

export default Info;