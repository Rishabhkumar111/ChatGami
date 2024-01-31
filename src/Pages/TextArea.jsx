import React, { useRef, useState } from "react";
import TypingArea from "./TypingArea";
import { useDispatch } from "react-redux";
import { addMessage } from "../app/slice";
import { userMessageAndImageReceivingFun, userMessageReceivingFun } from "../backend/api";

const TextArea = () => {
  const [inputText, setinputText] = useState("");
  const dispatch = useDispatch();
  const handleSend = () => {
    dispatch(addMessage({ sender: "me", text: inputText, type:"text" }));
    userMessageReceivingFun(dispatch, inputText);
    setinputText("");
  };

  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const imgUrl = URL.createObjectURL(file)
    dispatch(addMessage({ sender: "me", type:"img", img:imgUrl, text:inputText }));
    if (file) {
      console.log("Selected file:", file.name);
      userMessageAndImageReceivingFun(dispatch, inputText);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className=" bg-teal-500 h-[12vh] gap-5 flex items-center justify-evenly">
      <div className=" bg-slate-700 h-[80%] w-[80%] rounded-xl flex items-center justify-around px-4 gap-3">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: "none" }}
          ref={fileInputRef}
        />
        <button
          className=" bg-yellow-300 h-12 w-12 rounded-full flex justify-center items-center text-3xl"
          onClick={handleButtonClick}
        >
          🧷
        </button>
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
