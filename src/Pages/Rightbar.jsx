import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import home from "../assets/home.jsx";
import upload from "../assets/upload.jsx";
import Options from "./Options";
import logout from "../assets/Logout2.jsx";
import { exit } from "../_auth/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { changeTab } from "../app/slice.js";

const Rightbar = ({ right }) => {
  let css = " transition-width duration-500 ease-in-out h-[0vh]";
  let cssbutton =
    " transition-width duration-300 ease-in-out h-[0vh] opacity-0 pointer-events-none";
  if (right) {
    cssbutton =
      " transition-width duration-300 ease-in-out h-[40vh] opacity-100";
    css = " h-[50vh] transition-width duration-500 ease-in-out";
  }
  const navigate = useNavigate();
  const activeTab = useSelector(state => state.activeTab);
  const dispatch = useDispatch();

  const handle = async () => {
    const xx = await exit();
    if (xx === "signOut") navigate("/");
  };
  const goHome = () => {
    dispatch(changeTab({activeTab:"home"}))
  };
  const goUpload = () => {
    dispatch(changeTab({activeTab:"upload"}))
  };
  return (
    <div
      className={`bg-[#1F1F22] sm:hidden absolute z-10 rounded-lg flex items-center w-[60vw] flex-col pt-5 top-[4vh] right-0 ${css}`}
    >
      <div
        className={`flex flex-col flex-grow mt-6 justify-between w-full ${cssbutton}`}
      >
        <div className=" flex flex-col gap-3 items-center">
          <Options
            text={"Home"}
            img={home}
            active={activeTab === "home"}
            Clicked={goHome}
          />
          <Options
            text={"Upload Images"}
            img={upload}
            active={activeTab === "upload"}
            Clicked={goUpload}
          />
        </div>

        <div className=" flex flex-col gap-5 items-center mb-[10px]">
          <Options
            text={"Logout"}
            img={logout}
            active={false}
            Clicked={handle}
          />
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
