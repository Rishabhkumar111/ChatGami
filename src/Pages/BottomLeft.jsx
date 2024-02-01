import React from "react";
import { useNavigate } from "react-router-dom";
import {exit} from "../_auth/Firebase"
import { useSelector } from "react-redux";

const BottomLeft = () => {
  const navigate = useNavigate();
  const initilas = useSelector((state) => state.userInfo.initials);
  const handle = async () => {
    const xx = await exit();
    if (xx === "signOut") navigate("/");
  };
  return (
    <button className=" text-cyan-50 border border-white p-2 h-[10vh] flex items-center justify-evenly w-[100%] gap-6" onClick={handle}>
      <div className=" bg-yellow-300 h-16 w-16 rounded-full flex justify-center items-center text-4xl">{initilas}</div>Logout
    </button>
  );
};

export default BottomLeft;
