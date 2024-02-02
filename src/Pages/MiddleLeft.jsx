import home from "../assets/home.jsx";
import upload from "../assets/upload.jsx";
import React from "react";
import Options from "./Options";

const MiddleLeft = () => {
  return (
    <div className=" flex flex-col flex-grow w-full mt-6 items-center gap-5">
      <Options text={"Home"} img={home} active={true}/>
      <Options text={"Upload Images"} img={upload} active={false}/>
    </div>
  );
};

export default MiddleLeft;
