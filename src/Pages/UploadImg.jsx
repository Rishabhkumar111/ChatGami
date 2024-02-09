import React, { useState } from "react";
import NavBar from "./NavBar";
import Rightbar from "./Rightbar";

const UploadImg = ({ css }) => {
  const [right, setright] = useState(false);
  const clicked = () => {
    setright(!right);
  };
  return (
    <div className={`${css} flex flex-col bg-[#000000] w-full`}>
      <NavBar clicked={clicked} right={right} />
      <Rightbar right={right} />
      <div className=" text-3xl font-semibold text-[#43434d] h-full flex justify-center items-center text-center">
        Upload Images page will be added soon....
      </div>
    </div>
  );
};

export default UploadImg;
