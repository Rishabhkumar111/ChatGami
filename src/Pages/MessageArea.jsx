import React, { useState } from "react";
import ChatArea from "./ChatArea";
import TextArea from "./TextArea";
import NavBar from "./NavBar";
import Rightbar from "./Rightbar";

const MessageArea = ({ css, setIsUploadButtonClicked, isUploadButtonClicked }) => {
  const [right, setright] = useState(false);
  const clicked = () => {
    setright(!right);
  };
  return (
    <div className={`flex flex-col bg-[#000000] ${css} w-full`}>
      <NavBar clicked={clicked} right={right} />
      <ChatArea />
      <TextArea />
      <Rightbar
        right={right}
      />
    </div>
  );
};

export default MessageArea;
