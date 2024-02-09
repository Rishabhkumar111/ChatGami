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
  const [isClicked, setIsClicked] = useState(false);

  const dispatch = useDispatch();
  const handleSend = () => {
    setIsClicked(true);
    if (imgURL === "" && inputText.length > 0) {
      dispatch(addMessage({ sender: "me", text: inputText, type: "text" }));
      userMessageReceivingFun(dispatch, inputText);
    }
    setTimeout(() => {
      setIsClicked(false);
    }, 300);

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
      setimgURL(url);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      {imgURL && <PreviewImg imgURL={imgURL} setimgURL={setimgURL} />}
      <div className=" bg-[#000000] h-[10vh] sm:h-[12vh] gap-[2.5vw] flex sm:items-start ml-[2.5vw] pt-3 mr-[2.5vw] sm:mr-[0vw] items-center">
        <div className=" bg-[#8A8A8A] bg-opacity-50 h-[70%] w-[88%] rounded-xl flex items-center justify-around px-4 gap-3">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }}
            ref={fileInputRef}
          />
          <button
            className="h-8 w-8 sm:h-12 sm:w-12 rounded-full flex justify-center items-center text-3xl"
            onClick={handleButtonClick}
          >
            🧷
          </button>
          <TypingArea text={inputText} setinputText={setinputText} />
        </div>
        <button
          className={`${
            isClicked ? "bg-white " : "bg-[#3489BB] "
          } sm:h-[68%] h-[68%] aspect-square rounded-lg text-1xl ${
            isClicked ? "text-[#3489BB] " : "text-white "
          } flex justify-center items-center sm:hover:bg-white sm:hover:text-[#3489BB]`}
          onClick={handleSend}
        >
          <Send css={" h-[55%] aspect-square"} />
        </button>
      </div>
    </div>
  );
};

export default TextArea;
