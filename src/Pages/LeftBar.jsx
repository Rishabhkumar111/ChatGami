import React from "react";
import TopLeft from "./TopLeft";
import MiddleLeft from "./middleLeft";
import BottomLeft from "./BottomLeft";

const LeftBar = () => {
  return (
    <div className="flex text-[#fafdff] flex-col bg-[#1F1F22] w-[18%] items-center">
      <TopLeft />
      <div className="h-[3px] bg-[#003858] w-[100%]"> </div>
      <MiddleLeft />
      <div className="h-[3px] bg-[#003858] w-[100%]"> </div>
      <BottomLeft />
    </div>
  );
};

export default LeftBar;
