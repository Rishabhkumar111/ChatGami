import React from "react";

const TypingArea = ({text, setinputText}) => {
  const handleChange = (e)=>{
    setinputText(e.target.value);
  }
  return (
    <textarea
      typeof="text"
      className="h-[95%] flex flex-grow rounded-xl text-[#FFFFFF] tracking-wide font-[200] focus:outline-none px-3 overflow-auto resize-none py-3 bg-transparent placeholder:text-[#FFFFFF] placeholder:opacity-50 text-md sm:text-lg"
      placeholder="Enter your text here ...."
      value={text}
      onChange={handleChange}
    ></textarea>
  );
};

export default TypingArea;
