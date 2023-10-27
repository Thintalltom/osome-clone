import React from "react";
import "./Header1.css";
import { FcGoogle } from "react-icons/fc";
import { FaStar } from "react-icons/fa";


const Header1 = () => {
  return (
    <div className="text-center bg-amber-50 w-full p-4 h-full ">
      <p className="lg:text-6xl text-2xl font-bold">
        Hassle-free incorporation <br />
        <div className="flex mt-[-10px] container justify-center items-center">
          <p>and expert accounting </p>
          <img
            src={
              "https://images.unsplash.com/photo-1599870418764-c38abcfb955a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D"
            }
            className="man1"
          />
          <img
            src={
              "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D"
            }
            className="man2"
          />
          <img
            src={
              "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D"
            }
            className="man3"
          />
        </div>
        for better businesses
      </p>
      <div className="flex text-center justify-center items-center gap-9 mt-[30px]">
        <button className="bg-blue-700 text-white font-medium p-4 rounded-[30px]">
          Get Started{" "}
        </button>
        <button className="border-blue-700 text-blue-700 border-2 font-medium p-4 rounded-[30px]">
          Watch demo
        </button>
      </div>
      <div className="flex justify-center mt-4 gap-4 items-center">
        <FcGoogle className="text-4xl " />
        <div className="flex text-orange-400">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <p>569 Reviews</p>
      </div>

      <div className="flex justify-center items-center mt-4 sScreen">
          <img className="rounded-[20px] Sscreen lg:block sm:hidden" src={'https://strapi-cdn.osome.com/full_intro_sg_main_desktop_bcbe03c533.webp'} />
     
      </div>
    </div>
  );
};

export default Header1;
