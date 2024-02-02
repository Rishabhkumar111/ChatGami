import React, { useRef, useState } from "react";
import TypingArea from "./TypingArea";
import { useDispatch } from "react-redux";
import { addMessage } from "../app/slice";
import Send from "../assets/send.jsx";
import {
  userMessageAndImageReceivingFun,
  userMessageReceivingFun,
} from "../backend/api";
import PreviewImg from "./PreviewImg";

const TextArea = () => {
  const [inputText, setinputText] = useState("");
  const [imgURL, setimgURL] = useState("");

  const dispatch = useDispatch();
  const handleSend = () => {
    if (imgURL ==='' && inputText.length > 0) {
      dispatch(addMessage({ sender: "me", text: inputText, type: "text" }));
      userMessageReceivingFun(dispatch, inputText);
    }
    
    if (imgURL) {
      setimgURL("");
      dispatch(
        addMessage({ sender: "me", type: "img", img: imgURL, text: inputText })
      );
      userMessageAndImageReceivingFun(dispatch, inputText);
    }
    setinputText("");
  };

  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      console.log("Selected file:", file.name);
      setimgURL(url);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      {imgURL && (<PreviewImg imgURL={imgURL} setimgURL={setimgURL}/>)}
      <div className=" bg-[#000000] h-[12vh] gap-[2.5vw] flex items-start ml-[2.5vw] pt-3">
        <div className=" bg-[#8A8A8A] bg-opacity-50 h-[70%] w-[88%] rounded-xl flex items-center justify-around px-4 gap-3">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }}
            ref={fileInputRef}
          />
          <button
            className="h-12 w-12 rounded-full flex justify-center items-center text-3xl"
            onClick={handleButtonClick}
          >
            🧷
          </button>
          <TypingArea text={inputText} setinputText={setinputText} />
        </div>
        <button
          className=" bg-[#3489BB] h-[68%] aspect-square rounded-lg text-1xl text-white flex justify-center items-center hover:bg-white hover:text-[#3489BB]"
          onClick={handleSend}
        >
          <Send css={" h-[55%] aspect-square"}/>
        </button>
      </div>
    </div>
  );
};

export default TextArea;
