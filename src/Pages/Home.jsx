import React, { useEffect } from "react";
import LeftBar from "./LeftBar";
import { useNavigate } from "react-router-dom";
import { auth } from "../_auth/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import MessageArea from "./MessageArea";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!!!user) {
        navigate("/");
      }
    });
    return () => {
      unsubscribe(); // Unsubscribe when the component unmounts
    };
  }, []);
  return (
    <div className=" bg-[#000000] h-screen text-white flex">
      <LeftBar />
      <MessageArea />
    </div>
  );
};

export default Home;
