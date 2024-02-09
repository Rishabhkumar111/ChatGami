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
import { deleteMessage, updateSink } from "../app/slice";

const AuthLayout = () => {
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const user = auth.currentUser;
    if (!!user) {
      navigate("/home");
    }else {
      const timer = setTimeout(() => {
        if (isLoading) {
          setisLoading(false);
          navigate("/");
        }
      }, 6000);

      return () => clearTimeout(timer);
    }
    return () => {};
  }, [isLoading, navigate]);

  const handleSignIn = async () => {
    setisLoading(true);
    dispatch(deleteMessage());
    dispatch(updateSink({ value: false }));
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

  if (isLoading) {
    return <Loading text={"auth se aaya hu"} />;
  }

  return (
    <>
      <section className="flex flex-1 mt-[21vh] items-center justify-end sm:justify-normal flex-col gap-5 z-10">
        <img src={`${logo}`} alt="logo" className="hidden sm:block sm:w-[52%] sm:mb-[6vh]" />

        <button
          className=" text-white border border-white/90 font-medium md:text-[30px] text-[22px] tracking-wide px-4 md:px-12 py-3 rounded-md mt-10 flex justify-center items-center gap-[3vw] bg-[#1F1F22]"
          onClick={handleSignIn}
        >
          <img src={`${google}`} className="w-[40px] md:w-[60px]" />
          Login using Google
        </button>
        <p className=" sm:text-[#699FBF] mb-[13vh] sm:mb-0 text-white ">Welcome back!</p>
        <img src={`${logo}`} alt="logo" className="w-[70%] mb-[6vh] sm:hidden" />
      </section>
        <img
          src={`${leftImg}`}
          alt="second image"
          className="sm:hidden h-full object-cover bg-no-repeat absolute w-full z-0 left-3"
        />
      <img
        src={`${leftImg}`}
        alt="side image"
        className="hidden xl:block h-screen object-cover bg-no-repeat mr-14"
      />

      {/* <div className="hidden sm:block h-screen" style={{ backgroundImage: `url(${leftImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div> */}
    </>
  );
};

export default AuthLayout;
