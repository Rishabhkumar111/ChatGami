import React from 'react'
import logo from  '../assets/chatGami.svg'
import menu from  '../assets/menu.svg'
import icon from '../assets/icon.png'
import { useSelector } from 'react-redux'

const TopLeft = ({handleButtonClick}) => {
  const isClickedfun = useSelector(state=>state.isClickedfun);
  console.log(isClickedfun);
  let valCss = "h-[10vh] flex items-center text-[#fafdff] gap-[3vw]";
  if(!isClickedfun){
    valCss = valCss + ' ml-4 ';
  }
  return (
    <div className={valCss} onClick={()=>handleButtonClick()}>
      {!isClickedfun && <img src={logo} alt='logo' className=' w-[65%]'/>}
      {!isClickedfun && <img src={menu} alt='menu' className="w-[10%]"/>}
      {isClickedfun && <img src={icon} alt='icon' className="w-[36px]"/>}
    </div>
  )
}

export default TopLeft;