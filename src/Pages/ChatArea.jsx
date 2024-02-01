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
  // console.log(auth, !!auth.currentUser);
  const name = auth.currentUser.displayName;

  const dispatch = useDispatch();

  const [imgURL, setimgURL] = useState("");

  const handleClickForImg = (message) => {
    if (message.img) {
      console.log(message.img);
      setimgURL(message.img);
    }
  };

  useEffect(()=>{
    dispatch(addMessage({sender:"bot", type:"text", text:`Hi ${name}, How can i help you today?`, img:null,}));
  },[name])

  useEffect(() => {
    const chatContainer = document.getElementById("chatContainer");
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [messages]);

  return (
    <>
      {imgURL && <PreviewImg imgURL={imgURL} setimgURL={setimgURL} />}
      <div
        id="chatContainer"
        className="bg-amber-800 h-[88vh] overflow-y-auto p-4 flex-shrink-1"
      >
        {messages.map((message, index) => (
          <div
            key={index}
            onClick={() => {
              handleClickForImg(message);
            }}
            className={`mb-2 flex items-start ${
              message.sender === "me" ? " justify-end" : " justify-start"
            } ${message.type === "img" ? " cursor-pointer " : ""}`}
          >
            {message.sender !== "me" && (
              <div className="h-9 w-9 bg-gray-800 rounded-full mx-2 flex justify-center items-center text-2xl">
                🤖
              </div>
            )}
            <span
              className={`max-w-[70%] text-left inline-block bg-blue-500 rounded-lg p-2 text-white ${
                message.sender === "me" ? "bg-blue-500" : "bg-gray-800"
              }`}
            >
              {message.type === "img" && (
                <img
                  src={`${message.img}`}
                  className="w-[20vw] h-[20vw] object-contain bg-gray-800"
                  alt="Image"
                />
              )}
              <ReactMarkdown>
                {message.text}
              </ReactMarkdown>
            </span>

            {message.sender === "me" && (
              <div className="h-9 w-9 bg-blue-500 rounded-full mx-2 flex justify-center items-center text-lg">
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



// what is inside it , tell me more about image , which kind of image
// it is?