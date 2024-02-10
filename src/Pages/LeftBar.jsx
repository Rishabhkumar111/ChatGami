import React from "react";
import TopLeft from "./TopLeft.jsx";
import MiddleLeft from "./MiddleLeft.jsx";
import BottomLeft from "./BottomLeft.jsx";

const LeftBar = ({ css, handleButtonClick }) => {
  return (
    <div
      className={`sm:flex flex-col text-[#fafdff] bg-[#1F1F22] w-[18%] items-center ${css} hidden`}
    >
      <TopLeft handleButtonClick={handleButtonClick} />
      <div className="h-[3px] bg-[#003858] w-[100%]"> </div>
      <MiddleLeft />
      <div className="h-[3px] bg-[#003858] w-[100%]"> </div>
      <BottomLeft />
    </div>
  );
};

export default LeftBar;
