import React, { useEffect } from "react";
import LeftBar from "./LeftBar";
import { useNavigate } from "react-router-dom";
import { auth } from "../_auth/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import MessageArea from "./MessageArea";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserInfo, updateSink } from "../app/slice";
import Loading from "../Pages/Loading";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // console.log(auth, auth.currentUser)
      if (auth.currentUser)
        dispatch(
          addUserInfo({
            name: auth.currentUser.displayName,
            email: auth.currentUser.email,
          })
        );
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
    dispatch(updateSink({value: !isButtonClicked}));
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
      <MessageArea
        css={
          isButtonClicked
            ? "w-[95%] transition-width duration-500 ease-in-out"
            : "w-[82%] transition-width duration-500 ease-in-out"
        }
      />
    </div>
  );
};

export default Home;
