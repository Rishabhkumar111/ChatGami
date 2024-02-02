import React from "react";
import { useNavigate } from "react-router-dom";
import { exit } from "../_auth/Firebase";
import { useSelector } from "react-redux";

const BottomLeft = () => {
  const navigate = useNavigate();
  const initilas = useSelector((state) => state.userInfo.initials);
  const name = useSelector((state) => state.userInfo.name);
  const handle = async () => {
    const xx = await exit();
    if (xx === "signOut") navigate("/");
  };
  return (
    <button
      className=" text-white borderp-2 h-[10vh] flex items-center justify-evenly w-[100%] gap-2 mb-1"
      onClick={handle}
    >
      <div className=" bg-[#3489BB] h-14 w-14 rounded-full flex justify-center items-center text-3xl font-semibold">
        {initilas}
      </div>
      <div className="text-[18px] font-semibold">{name}</div>
    </button>
  );
};

export default BottomLeft;
