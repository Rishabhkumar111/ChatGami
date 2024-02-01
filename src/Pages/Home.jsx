import React, { useEffect } from "react";
import LeftBar from "./LeftBar";
import { useNavigate } from "react-router-dom";
import { auth } from "../_auth/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import MessageArea from "./MessageArea";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserInfo } from "../app/slice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // console.log(auth, auth.currentUser)
      dispatch(addUserInfo({name:auth.currentUser.displayName, email: auth.currentUser.email}));
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
    return null;
  }
  return (
    <div className=" bg-[#000000] h-screen text-white flex">
      <LeftBar />
      <MessageArea />
    </div>
  );
};

export default Home;
