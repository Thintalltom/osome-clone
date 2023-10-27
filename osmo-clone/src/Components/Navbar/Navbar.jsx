import React, { useState } from "react";
import "./Navbar.css";
import Resource from "./Resource";
import Corporation from "./Corporation";

import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isHover, setIsHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  const handleMouseOver = () => {
    setIsHover(!isHover);
  };
  const handleMouseOut = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-white-500 w-full h-[80px]  cursor-pointer">
      <div className="lg:flex justify-around   p-4  hidden">
        <img src={'https://osome.com/assets/img/logo/osome-logo-text.svg'} />
        <div className="flex gap-9  text-slate-900 font-medium text-xl">
          <div
            onClick={handleMouseOver}
            className="hover:bg-slate-200 p-[13px] rounded-[20px]"
          >
            Incorporation
          </div>
          <p className="hover:bg-slate-200 p-[13px] rounded-[20px]">
            Accounting
          </p>
          <p className="hover:bg-slate-200 p-[13px] rounded-[20px]">
            Secretary
          </p>
          <p
            className="hover:bg-slate-200 p-[13px] rounded-[20px]"
            onClick={handleMouseOut}
          >
            Resource
          </p>
          <p className="hover:bg-slate-200 p-[13px] rounded-[20px]">About</p>
        </div>
        <div className="flex gap-4">
          <p className="hover:bg-slate-200 p-[13px] rounded-[20px]">SG</p>
          <button className="bg-slate-900 font-medium p-[10px] w-[80px] rounded-[20px] text-white ">
            Login
          </button>
        </div>
      </div>

      {/*The tooltip for Incorporation section */}
      <div className="bigScreen">{isHover && <Corporation />}</div>

      {/*The tooltip for resource section */}
      <div className="bigScreen">{isOpen && <Resource />}</div>

      {/*Hamburger */}
      <div className="lg:hidden flex justify-between p-[20px]">
        <div>
        <img src={'https://osome.com/assets/img/logo/osome-logo-text.svg'} />
        </div>
       

        <div
          className="lg:hidden md:block text-lg cursor-pointer  z-10"
          onClick={handleClick}
        >
          {open ? <FiMenu /> : <FiX /> }
        </div>
      </div>
      {/*Navbar for small screen */}
      <div
        className={
          open
            ? "hidden"
            : `flex-col flex w-full h-screen z-[80]   gap-4 p-4 xs:w-full sm:h-screen xs:h-screen 2xl:hidden lg:hidden mt-[50px]   xs:h-screen md:h-screen bg-slate-100 absolute top-0 left-0`
        }
      >
        <li className="list-none font-medium text-xl"   onClick={handleMouseOver} >Incorporation</li>
        <li className="list-none font-medium text-xl">Accounting</li>
        <li className="list-none font-medium text-xl">Secretary</li>
        <li className="list-none font-medium text-xl">Resources</li>
        <li className="list-none font-medium text-xl">About</li>
        <div className="flex justify-center items-center mt-[300px]">
        <button className="bg-slate-900 text-white font-medium  text-center rounded-[20px] w-[300px] h-[50px]">Log in</button>
        </div>
          
      </div>

    </div>
  );
};

export default Navbar;
