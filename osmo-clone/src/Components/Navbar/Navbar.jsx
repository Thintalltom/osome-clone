import React, { useState } from "react";
import "./Navbar.css";
import Resource from "./Resource";
import Corporation from "./Corporation";

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
    <div className="bg-white-500 w-full h-[100px]  cursor-pointer">
      <div className="lg:flex justify-around   p-4  hidden">
        <p>Osome</p>
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
          <p>Osmo</p>
        </div>

        <div
          className="lg:hidden md:block text-lg cursor-pointer  z-10"
          onClick={handleClick}
        >
          {open ? <p>Open</p> : <p>Close</p>}
        </div>
      </div>
      {/*Navbar for small screen */}
      <div
        className={
          open
            ? "hidden"
            : `flex-col flex w-full h-screen   gap-4 p-4 xs:w-full xs:h-screen 2xl:hidden lg:hidden mt-[50px]   xs:h-screen md:h-screen bg-red-500 absolute top-0 left-0`
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

      <div className="lg:hidden bg-blue-500 w-full h-screen">
          {/*The tooltip for Incorporation section */}
          <div> {isHover && <Corporation />}</div>
      </div>

    </div>
  );
};

export default Navbar;
