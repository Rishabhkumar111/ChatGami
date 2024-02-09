import home from "../assets/home.jsx";
import upload from "../assets/upload.jsx";
import React, { useState } from "react";
import Options from "./Options";
import logout from "../assets/Logout2.jsx";
import { useNavigate } from "react-router-dom";
import { exit } from "../_auth/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { changeTab } from "../app/slice.js";

const MiddleLeft = () => {
  const navigate = useNavigate();
  const handle = async () => {
    const xx = await exit();
    if (xx === "signOut") navigate("/");
  };
  const activeTab = useSelector(state => state.activeTab);
  const dispatch = useDispatch();

  const goHome = () => {
    dispatch(changeTab({activeTab:"home"}))
  };
  const goUpload = () => {
    dispatch(changeTab({activeTab:"upload"}))
  };
  return (
    <div className="flex flex-col flex-grow  w-full mt-6 justify-between">
      <div className=" flex flex-col gap-5 items-center ">
        <Options
          text={"Home"}
          img={home}
          active={activeTab==="home"}
          Clicked={goHome}
        />
        <Options
          text={"Upload Images"}
          img={upload}
          active={activeTab==="upload"}
          Clicked={goUpload}
        />
      </div>

      <div className=" flex flex-col gap-5 items-center mb-[10px]">
        <Options text={"Logout"} img={logout} active={false} Clicked={handle} />
      </div>
    </div>
  );
};

export default MiddleLeft;
