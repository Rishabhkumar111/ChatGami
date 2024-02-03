import home from "../assets/home.jsx";
import upload from "../assets/upload.jsx";
import React from "react";
import Options from "./Options";
import logout from "../assets/Logout2.jsx";
import { useNavigate } from "react-router-dom";
import { exit } from "../_auth/Firebase";

const MiddleLeft = () => {
  const navigate = useNavigate();
  const handle = async () => {
    const xx = await exit();
    if (xx === "signOut") navigate("/");
  };
  return (
    <div className="flex flex-col flex-grow  w-full mt-6 justify-between">
      <div className=" flex flex-col gap-5 items-center ">
        <Options text={"Home"} img={home} active={true} />
        <Options text={"Upload Images"} img={upload} active={false} />
      </div>

      <div className=" flex flex-col gap-5 items-center mb-[10px]" onClick={handle}>
        <Options text={"Logout"} img={logout} active={false} />
      </div>
    </div>
  );
};

export default MiddleLeft;
