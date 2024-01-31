import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LoadingScreen from "./LoadingScreen";

const ChatArea = () => {
  const messages = useSelector((state) => state.messages);
  const loading = useSelector((state) => state.isLoading);

  useEffect(() => {
    const chatContainer = document.getElementById("chatContainer");
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [messages]);

  return (
    <div
      id="chatContainer"
      className="bg-amber-800 h-[88vh] overflow-y-auto p-4 flex-shrink-1"
    >
      {messages.map((message, index) => (
        <div
          key={index}
          className={`mb-2 flex items-start ${
            message.sender === "me" ? " justify-end" : " justify-start"
          }`}
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
            {message.type === "text" && `${message.text}`}
            {message.type === "img" && (
                <img src={`${message.img}`} className="h-[20vw] w-[20vw]" alt="Image" />
            )}
          </span>

          {message.sender === "me" && (
            <div className="h-9 w-9 bg-blue-500 rounded-full mx-2 flex justify-center items-center text-lg">
              RK
            </div>
          )}
        </div>
      ))}
      {loading && <LoadingScreen />}
    </div>
  );
};

export default ChatArea;
