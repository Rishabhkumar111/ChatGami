import React from 'react'
import logo from '../assets/chatGami.svg'
import menu from  '../assets/menu.svg'
import cross from  '../assets/cross.svg'

const NavBar = ({clicked, right}) => {
  return (
    <div className=' bg-[#1F1F22] z-20 w-full h-[8vh] sm:hidden items-center justify-between px-4 flex'>
        <img src={logo}  className=' h-[60%]'/>
        {!right && <img src={menu} className=' h-[40%]' onClick={clicked} />}
        {right && <img src={cross} className=' h-[50%] border p-1 rounded-sm' onClick={clicked} />}
    </div>
  )
}

export default NavBar