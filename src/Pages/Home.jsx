import React, { useEffect, useState } from "react";
import { exit } from "../_auth/Firebase";

import { auth } from "../_auth/firebaseConfig";
import App from "../App";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
const navigate = useNavigate();
  useEffect(() => {
    const checkAuth = async () => {
      const user = auth.currentUser;
      console.log(user);
      setIsLoggedIn(!!user);
    };
    checkAuth();
  }, []);
  const handle = ()=>{
    exit();
    setIsLoggedIn(true);
    navigate('/');
  }
  return (
    !isLoggedIn?
    <div className=" bg-[#000000] h-screen">
      <button className=" text-cyan-50 border border-white p-10" onClick={handle}>
        Home
      </button>
    </div>:<div>Redirecting to home...</div>
  );
};

export default Home;
