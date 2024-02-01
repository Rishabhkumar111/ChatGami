import React, { useEffect, useState } from "react";
import { auth } from "./firebaseConfig";
import { useNavigate } from "react-router-dom";
import Loading from "../Pages/Loading";
import logo from "../assets/chatGami.svg";
import leftImg from "../assets/img.png";
import google from "../assets/Google.png";
import { signIn } from "./Firebase";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { addUserInfo } from "../app/slice";

const AuthLayout = () => {
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  useEffect(() => {
    const user = auth.currentUser;
    if (!!user) {
      navigate("/home");
    }
    return () => {};
  }, [navigate]);

  const handleSignIn = async () => {
    setisLoading(true);
    try {
      // throw new Error('Simulated sign-in error');
      const user = await signIn();
      setisLoading(false);
      if (!!user) {
        navigate("/home");
      } else {
        toast.error("Sign-in failed. Please try again.");
      }
    } catch (error) {
      toast.error("Sign-in failed. Please try again.");
      console.error("Sign-in error:", error);
    }
  };

  if(isLoading){
    return <Loading text={"auth se aaya hu"}/>
  }

  return (
    <>
      <section className="flex flex-1 mt-[21vh] items-center flex-col gap-5">
        <img src={`${logo}`} alt="logo" className="w-[52%] mb-[6vh]" />

        <button
          className=" text-white border border-white/90 font-medium text-[30px] tracking-wide px-12 py-3 rounded-md mt-10 flex justify-center items-center gap-[3vw] bg-[#1F1F22]"
          onClick={handleSignIn}
        >
          <img src={`${google}`} className="w-[60px]" />
          Login using Google
        </button>
        <p className=" text-[#699FBF]">Welcome back!</p>
      </section>
      <img
        src={`${leftImg}`}
        alt="side image"
        className="hidden xl:block h-screen  object-cover bg-no-repeat mr-14"
      />
      <ToastContainer />
    </>
  );
};

export default AuthLayout;
