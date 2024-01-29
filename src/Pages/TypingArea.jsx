import React from "react";

const TypingArea = ({text, setinputText}) => {
  const handleChange = (e)=>{
    setinputText(e.target.value);
  }
  return (
    <textarea
      typeof="text"
      class="h-[70%] flex flex-grow rounded-xl text-amber-950 focus:outline-none px-3 overflow-auto resize-none py-3"
      placeholder="Enter your text here ...."
      value={text}
      onChange={handleChange}
    ></textarea>
  );
};

export default TypingArea;
