import React from "react";
import gif from "../assets/loading.gif";

const LoadingScreen = () => {
  return (
    <div key="loading" className={`mb-2 flex items-start justify-start`}>
      <div className="h-9 w-9 bg-gray-800 rounded-full mx-2 flex justify-center items-center text-2xl">
        🤖
      </div>
      <span
        className={`max-w-[70%] text-left inline-block bg-gray-800 rounded-lg p-2 text-white `}
      >
        <img src={gif} className=" h-5 w-20"/>
      </span>
    </div>
  );
};

export default LoadingScreen;
