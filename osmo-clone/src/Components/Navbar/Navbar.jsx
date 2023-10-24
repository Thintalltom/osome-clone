import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isHover, setIsHover] = useState(false);
  const handleMouseOver = () => {
    setIsHover(true);
  };
  const handleMouseOut = () => {
    setIsHover(false);
  };
  return (
    <div className="bg-white-500 w-full h-[100px]  cursor-pointer">
      <div className="flex justify-around  flex  p-4">
        <p>Osome</p>
        <div className="flex gap-9  text-slate-900 font-medium text-xl">
          <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='hover:bg-slate-200 p-[13px] rounded-[20px]'>
            Incorporation
          </div>
          <p  className='hover:bg-slate-200 p-[13px] rounded-[20px]'>Accounting</p>
          <p  className='hover:bg-slate-200 p-[13px] rounded-[20px]'>Secretary</p>
          <p  className='hover:bg-slate-200 p-[13px] rounded-[20px]'>Resource</p>
          <p  className='hover:bg-slate-200 p-[13px] rounded-[20px]'>About</p>
        </div>
        <div className="flex gap-4">
          <p  className='hover:bg-slate-200 p-[13px] rounded-[20px]'>SG</p>
          <button className="bg-slate-900 font-medium p-[10px] w-[80px] rounded-[20px] text-white ">
            Login
          </button>
        </div>
      </div>

      {/*The tooltip section */}
      {isHover && (
        <div className="bg-white-300 w-full h-[300px]" >
          <div>
            <hr className="bg-blue-500" />
            <div className="flex justify-around justify-items-start p-4">
              <div>
                <p className="font-medium text-lg text-slate-900">
                  Start Your Company
                </p>
                <p className="text-slate-500">
                  Company in singapore guided by local expert
                </p>
              </div>
              <div>
                <p className="text-slate-500">START HERE</p>
                <p className="text-slate-900 font-medium">Incorporation for locals</p>
                <p className="text-slate-900 font-medium">Incorporation for foreigners</p>
              </div>
              <div>
                <p className="text-slate-500">EXPLORE MORE</p>
                <p className="text-slate-900 font-medium">Incorporation in singapore</p>
                <p className="text-slate-900 font-medium">Nominee director</p>
                <p className="text-slate-900 font-medium">Employment pass</p>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
