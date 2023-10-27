import React, { useState } from "react";
import "./Footer.css";
import { data } from "./data";
import { BsGooglePlay, BsGoogle } from "react-icons/bs";

const Footer = () => {
  const [open, setOpen] = useState(true);

  const toggle = (i) => {
    if (open == i) {
      return setOpen(null);
    }
    setOpen(i);
  };
  return (
    <div >
      <div className="bg-slate-800 w-full lg:h-[40vh] sm:h-[100vh] mt-4 p-[40px] " id='topFooter'>
        <div className="flex justify-around" id="footer">
          <div>
            <p className="text-slate-500">INCORPORATION</p>
            <p className="text-white">Incorporation</p>
            <p className="text-white">For Foreigners </p>
            <p className="text-white">Fro Singaporians & PRs </p>
          </div>

          <div>
            <p className="text-slate-500">ACCOUNTING</p>
            <p className="text-white">Accounting & Tax</p>
            <p className="text-white">Multicurrency Accounting </p>
            <p className="text-white">Gst Registration </p>
          </div>

          <div>
            <p className="text-slate-500">OTHER SERVICES</p>
            <p className="text-white">Dormant Company</p>
            <p className="text-white">Employee Pass </p>
            <p className="text-white">Dependent Pass </p>
          </div>
          <div>
            <p className="text-slate-500">PARTNERS</p>
            <p className="text-white">Our Partner</p>
            <p className="text-white">Aspire business Aspirant </p>
            <p className="text-white">White label solutions </p>
          </div>
        </div>

        {/*ACCordion for small screen*/}

        <div className="lg:hidden sm:block" id="accord">
          {data.map((data, i) => (
            <div className="flex flex-col text-slate-600">
              <div className="mt-4  p-4 ">
                <div
                  className="flex justify-between font-medium"
                  onClick={() => toggle(i)}
                >
                  {" "}
                  <p>{data.title}</p>
                  <span>
                    {" "}
                    {open === i ? (
                      <p className="text-white text-4xl ">-</p>
                    ) : (
                      <p className="text-white text-4xl">+</p>
                    )}
                  </span>
                </div>
                <hr />
                <div
                  className={
                    open === i
                      ? "contentDisplay font-thin text-white"
                      : "contentHide"
                  }
                >
                  {" "}
                  <p>{data.text1}</p>
                  <p>{data.text2}</p>
                  <p>{data.text3}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-[40px]" id='footerFlex'>
          <img
            src={"https://osome.com/assets/img/rebrandingImg/osome-logo.svg"}
          />
          <div className="flex gap-9" id="smallBtnCase">
            <button id='smallBtn' className="text-slate-900 bg-white border-2 border-white rounded-[40px] p-[10px] flex justify-around gap-4">
              <span className=" p-[2px]">
                <BsGooglePlay />
              </span>
              App Store{" "}
            </button>
            <button className="text-slate-900 bg-white border-2 border-white rounded-[40px] p-[10px] flex gap-4">
              {" "}
              <span className=" p-[2px]">
                <BsGoogle />
              </span>
              Play Store{" "}
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center mt-[30px]">
        <p className="text-center text-white">Coded by <span className="text-blue-500">tofG</span> </p>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
