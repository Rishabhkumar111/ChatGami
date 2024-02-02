import React from 'react'
import logo from  '../assets/chatGami.svg'
import menu from  '../assets/menu.svg'

const TopLeft = () => {
  return (
    <div className=' h-[10vh] flex ml-4 items-center text-[#fafdff] gap-[3vw]'>
      <img src={logo} alt='logo' className=' w-[65%]'/>
      <img src={menu} alt='menu' className='w-[10%]'/>
    </div>
  )
}

export default TopLeft;