import React from 'react'
import logo from "../assets/chatGami.svg"
import bottomImg from "../assets/el.png"

const Loading = () => {
  return (
    <div className=' text-white flex flex-col items-center pt-[23vh] w-full h-screen bg-black'>
      <img src={logo} className='w-[45%]' />
      <div className=' text-5xl font-semibold mt-[10vh] tracking-wider'>Loading...</div>
      <div className=' absolute bottom-0 w-full h-[35%]'>
        <img src={bottomImg} className=' object-cover h-full w-full'/>
      </div>
    </div>
  )
}

export default Loading;