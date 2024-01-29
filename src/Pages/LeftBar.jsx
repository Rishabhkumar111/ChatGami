import React from "react";
import TopLeft from "./TopLeft";
import MiddleLeft from "./middleLeft";
import BottomLeft from "./BottomLeft";

const LeftBar = () => {
  return (
    <div className="flex text-cyan-50 flex-col bg-[#1F1F22] w-[18%] items-center">
      <TopLeft />
      <div className="h-[2px] bg-purple-400 w-[100%]"> </div>
      <MiddleLeft />
      <div className="h-[2px] bg-purple-400 w-[100%]"> </div>
      <BottomLeft />
    </div>
  );
};

export default LeftBar;
