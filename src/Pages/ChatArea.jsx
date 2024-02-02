import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LoadingScreen from "./LoadingScreen";
import PreviewImg from "./PreviewImg";
import { useDispatch } from "react-redux";
import { addMessage } from "../app/slice";
import { auth } from "../_auth/firebaseConfig";
import ReactMarkdown from "react-markdown";

const ChatArea = () => {
  const messages = useSelector((state) => state.messages);
  const loading = useSelector((state) => state.isLoading);
  const initilas = useSelector((state) => state.userInfo.initials);
  // messages.map((message, index) =>
  //   console.log(<ReactMarkdown>{message.text}</ReactMarkdown>)
  // );
  const name = auth.currentUser.displayName;

  const dispatch = useDispatch();

  const [imgURL, setimgURL] = useState("");

  const handleClickForImg = (message) => {
    if (message.img) {
      console.log(message.img);
      setimgURL(message.img);
    }
  };

  useEffect(() => {
    dispatch(
      addMessage({
        sender: "bot",
        type: "text",
        text: `Hi ${name}, How can i help you today?`,
        img: null,
      })
    );
  }, [name]);

  useEffect(() => {
    const chatContainer = document.getElementById("chatContainer");
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [messages]);

  return (
    <>
      {imgURL && <PreviewImg imgURL={imgURL} setimgURL={setimgURL} />}
      <div
        id="chatContainer"
        className=" bg-black h-[88vh] overflow-y-auto p-4 flex-shrink-1 mt-2"
      >
        {messages.map((message, index) => (
          <div
            key={index}
            onClick={() => {
              handleClickForImg(message);
            }}
            className={`mb-3.5 flex items-start ${
              message.sender === "me" ? " justify-end" : " justify-start"
            } ${message.type === "img" ? " cursor-pointer " : ""}`}
          >
            {message.sender !== "me" && (
              <div className="h-9 w-9 bg-[#4C1A9E] rounded-full mx-2 flex justify-center items-center text-lg mt-1 tracking-wide font-medium">
                CG
              </div>
            )}
            <span
              className={`max-w-[70%] overflow-auto font-[200] tracking-wide text-left inline-block bg-[#3489BB] rounded-lg p-2.5 text-white ${
                message.sender === "me" ? "bg-[#272A35]" : "bg-[#373E4E]"
              }`}
            >
              {message.type === "img" && (
                <img
                  src={`${message.img}`}
                  className="w-[20vw] h-[20vw] object-contain bg-[#000000]"
                  alt="Image"
                />
              )}
              <ReactMarkdown>{message.text}</ReactMarkdown>
            </span>

            {message.sender === "me" && (
              <div className="h-9 w-9 bg-[#3489BB] rounded-full mx-2 flex justify-center items-center text-lg mt-1 tracking-wide font-medium">
                {initilas}
              </div>
            )}
          </div>
        ))}
        {loading && <LoadingScreen />}
      </div>
    </>
  );
};

export default ChatArea;
