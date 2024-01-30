import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ChatArea = () => {
  const message = useSelector(state => state.messages);

  const [messages, setMessages] = useState(message);

  useEffect(() => {
    // Scroll to the bottom when new messages are added
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
          {message.sender !== "me" && <div className="h-9 w-9 bg-gray-800 rounded-full mx-2 flex justify-center items-center text-2xl">🤖</div>}
          <span
            className={`max-w-[70%] text-left inline-block bg-blue-500 rounded-lg p-2 text-white ${
              message.sender === "me" ? "bg-blue-500" : "bg-gray-800"
            }`}
          >
            {message.text}
          </span>
          {message.sender === "me" && <div className="h-9 w-9 bg-blue-500 rounded-full mx-2 flex justify-center items-center text-lg">RK</div>}
        </div>
      ))}
    </div>
  );
};

export default ChatArea;
