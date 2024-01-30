import React, { useState } from "react";
import TypingArea from "./TypingArea";
import { useDispatch } from "react-redux";
import { addMessage } from "../app/slice";
import { userMessageReceivingFun } from "../backend/api";

const TextArea = () => {
  const [inputText, setinputText] = useState("");
  const dispatch = useDispatch();
  const handleSend = () => {
    dispatch(addMessage({ sender: "me", text: inputText }));
    userMessageReceivingFun(dispatch, inputText);
    setinputText("");
  };
  return (
    <div className=" bg-teal-500 h-[12vh] gap-5 flex items-center justify-evenly">
      <div className=" bg-slate-700 h-[80%] w-[80%] rounded-xl flex items-center justify-around px-4 gap-3">
        <div className=" bg-yellow-300 h-12 w-12 rounded-full"></div>
        <TypingArea text={inputText} setinputText={setinputText} />
      </div>
      <button
        className=" bg-yellow-300 h-16 w-16 rounded-full text-4xl text-teal-500 flex justify-center items-center"
        onClick={handleSend}
      >
        %
      </button>
    </div>
  );
};

export default TextArea;
