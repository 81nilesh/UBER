import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-cover bg-center bg-[url(https://c8.alamy.com/comp/ET21H9/traffic-police-signals-symbols-signs-traffic-signals-street-lights-ET21H9.jpg)] h-screen pt-8 flex justify-between flex-col w-full">
      <img className="w-24 pl-9" src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />
      <div className="bg-white pb-7 py-5 px-5">
        <h2 className="text-[25px] font-bold">Get Started with Uber</h2>
        <Link to='/login' className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-6">Continue</Link>
      </div>
    </div>
  );
};

export default Home;
