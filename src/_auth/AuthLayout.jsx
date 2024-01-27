import React from "react";
import logo from "../assets/chatGami.svg";
import leftImg from "../assets/img.png";
import google from "../assets/Google.png";
import { Link } from "react-router-dom";
import { singIn } from "./Firebase";
const AuthLayout = () => {
  return (
    <>
      <section className="flex flex-1 mt-[21vh] items-center flex-col gap-5">
        <img src={`${logo}`} alt="logo" className="w-[52%] mb-[6vh]" />
        <Link to="/home">
          <button className=" text-white border border-white/90 font-medium text-[30px] tracking-wide px-12 py-3 rounded-md mt-10 flex justify-center items-center gap-[3vw] bg-[#1F1F22]"
          onClick={singIn}
          >
            <img src={`${google}`} className="w-[60px]" />
            Login using Google
          </button>
        </Link>
        <p className=" text-[#699FBF]">Welcome back!</p>
      </section>
      <img
        src={`${leftImg}`}
        alt="side image"
        className="hidden xl:block h-screen  object-cover bg-no-repeat mr-14"
      />
    </>
  );
};

export default AuthLayout;
