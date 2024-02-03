import React from "react";
import { useSelector } from "react-redux";

const Options = ({ text, img: Img, active }) => {
  const isClickedfun = useSelector(state=>state.isClickedfun);
  let valCss = " h-[30px] w-[30px] ";
  if(!isClickedfun){
    valCss = valCss + " ml-5 ";
  }
  return (
    <div
      className={`w-[90%] text-lg rounded-lg h-14 flex justify-start items-center gap-[1.5vw]  ${
        active === true ? " bg-[#fafdff] text-[#1F1F22] " : "  bg-[#26262a] "
      } hover:text-[#1F1F22] hover:bg-[#fafdff] p-4 transition-all`}
    >
      <Img css={valCss} />
      {!isClickedfun && <div>{text}</div>}
    </div>
  );
};

export default Options;
