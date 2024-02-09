import React, { useEffect } from "react";
import LeftBar from "./LeftBar";
import { useNavigate } from "react-router-dom";
import { auth } from "../_auth/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import MessageArea from "./MessageArea";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, addUserInfo, updateSink } from "../app/slice";
import Loading from "../Pages/Loading";
import UploadImg from "./UploadImg";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const activeTab = useSelector((state) => state.activeTab);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (auth.currentUser) {
        dispatch(
          addUserInfo({
            name: auth.currentUser.displayName,
            email: auth.currentUser.email,
          })
        );
        dispatch(
          addMessage({
            sender: "bot",
            type: "text",
            text: `Hi ${auth.currentUser.displayName}, How can i help you today?`,
            img: null,
          })
        );
      }
      if (!!!user) {
        navigate("/");
      }
      setAuthChecked(true);
    });
    return () => {
      unsubscribe(); // Unsubscribe when the component unmounts
    };
  }, [navigate]);
  if (!authChecked) {
    // Render loading state or nothing until authentication check is complete
    return <Loading />;
  }

  const handleButtonClick = () => {
    dispatch(updateSink({ value: !isButtonClicked }));
    setIsButtonClicked(!isButtonClicked);
  };
  return (
    <div className="bg-[#000000] h-screen text-white flex">
      <LeftBar
        css={
          isButtonClicked
            ? "w-[5%] transition-width duration-500 ease-in-out"
            : "w-[18%] transition-width duration-500 ease-in-out"
        }
        handleButtonClick={handleButtonClick}
      />
      {activeTab === "home" && (
        <MessageArea
          css={
            isButtonClicked
              ? "w-[95%] transition-width duration-500 ease-in-out"
              : "w-[82%] transition-width duration-500 ease-in-out"
          }
        />
      )}
      {activeTab === "upload" && (
        <UploadImg
          css={
            isButtonClicked
              ? "w-[95%] transition-width duration-500 ease-in-out"
              : "w-[82%] transition-width duration-500 ease-in-out"
          }
        />
      )}
    </div>
  );
};

export default Home;
