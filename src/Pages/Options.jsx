import React from "react";

const Options = ({ text, img: Img, active }) => {
  return (
    <div
      className={`w-[90%] text-lg rounded-lg h-14 flex justify-start items-center gap-[1.5vw]  ${
        active === true ? " bg-[#fafdff] text-[#1F1F22] " : "  bg-[#26262a] "
      } hover:text-[#1F1F22] hover:bg-[#fafdff] p-4 transition-all`}
    >
      <Img css={"h-[30px] ml-5 w-[30px]"} />
      <div>{text}</div>
    </div>
  );
};

export default Options;
