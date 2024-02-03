import React from "react";
import { useSelector } from "react-redux";

const BottomLeft = () => {
  const initilas = useSelector((state) => state.userInfo.initials);
  const name = useSelector((state) => state.userInfo.name);
  const isClickedfun = useSelector(state=>state.isClickedfun);
  let valCss = "h-14 w-14 text-3xl";
  if(isClickedfun){
    valCss = "h-12 w-12 text-2xl";
  }
  return (
    <button className=" text-white borderp-2 h-[10vh] flex items-center justify-evenly w-[100%] gap-2 mb-1">
      <div className= {`bg-[#3489BB] rounded-full flex justify-center items-center font-semibold ${valCss}`}>
        {initilas}
      </div>
      {!isClickedfun && <div className="text-[18px] font-semibold">{name}</div>}
    </button>
  );
};

export default BottomLeft;
