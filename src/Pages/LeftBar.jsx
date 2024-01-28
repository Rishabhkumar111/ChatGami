import React from "react";
import TopLeft from "./TopLeft";
import MiddleLeft from "./middleLeft";
import BottomLeft from "./BottomLeft";

const LeftBar = () => {
  return (
    <div className="flex text-cyan-50">
      <TopLeft />
      <MiddleLeft />
      <BottomLeft />
    </div>
  );
};

export default LeftBar;
