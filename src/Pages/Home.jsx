import React, { useEffect } from "react";
import { exit } from "../_auth/Firebase";
import { useNavigate } from "react-router-dom";
import { auth } from "../_auth/firebaseConfig";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = auth.currentUser;
    // console.log(!!user, user);
    if (!!!user) {
      navigate("/");
    }
    return () => {};
  }, [navigate]);

  const handle = async () => {
    const xx = await exit();
    if(xx==="signOut")navigate("/");
  };
  return (
    <div className=" bg-[#000000] h-screen text-white">
      <button onClick={handle}>home button for logout</button>
    </div>
  );
};

export default Home;
