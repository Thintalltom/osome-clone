import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import './Doings.css'

const Doing = () => {
  return (
    <div className=" w-full h-screen bg-amber-50 p-4 ">
      <div className="theScreen">
        <p className="text-center text-slate-500 "  id='what'>WHAT WE DO</p>
        <p className="text-center lg:text-5xl lg:font-medium sm:text-4xl sm:font-bold" id='stage'>
          Flexible services for every <br /> stage of your business
        </p>
      </div>

      <div className="lg:flex justify-around mt-4 lg:block " id="smallScreen">
        <div className="bg-white shadow-sm p-4 w-[600px] rounded-[20px] h-[500px]" id="smallScreenBox1">
          <p className="font-bold text-4xl">
            <span className="text-blue-800">Start</span> my business
          </p>
          <p className="text-slate-900 mt-4 font-medium">
            Start your business with fast online company incorporation. Plus, a{" "}
            <br /> bank account and registered address from day one.
          </p>
          <div className="flex justify-around mt-[120px]">
            <div className="flex flex-col gap-[10px] mt-[110px] ">
              <button className="border-2 border-blue-800 font-medium text-blue-800 p-[10px] flex justify-between gap-4    rounded-[20px]">
                For Locals{" "}
                <span>
                  <AiOutlineArrowRight />
                </span>
              </button>
              <button className="border-2 border-blue-800 font-medium text-blue-800  p-[10px] flex justify-between gap-4 rounded-[20px]">
                {" "}
                for foreigners{" "}
                <span>
                  <AiOutlineArrowRight />
                </span>{" "}
              </button>
            </div>
            <img
              src={
                "https://strapi-cdn.osome.com/working_on_laptop_man_4a0ec6e6af.svg"
              }
              id='smallScreenimg'
            />
          </div>
        </div>


        <div className="bg-white shadow-sm p-4 w-[600px] rounded-[20px] h-[500px]">
          <p className="font-bold text-4xl">
            <span className="text-blue-800">Switch</span> to osome
          </p>
          <p className="text-slate-900 mt-4 font-medium">
          Get expert accounting and corporate secretarial services
           alongside <br /> easy-to-use software and unlimited bookkeeping.
          </p>
          <div className="flex justify-around mt-[120px]">
            <div className="flex flex-col gap-[10px] mt-[110px] ">
              <button className="border-2 border-blue-800 font-medium text-blue-800 p-[10px] flex justify-between gap-4    rounded-[20px]">
                Accounting
                <span>
                  <AiOutlineArrowRight />
                </span>
              </button>
              <button className="border-2 border-blue-800 font-medium text-blue-800  p-[10px] flex justify-between gap-4 rounded-[20px]">
                {" "}
               Corporate Secretary
                <span>
                  <AiOutlineArrowRight />
                </span>{" "}
              </button>
            </div>
            <img
              src={
                "https://strapi-cdn.osome.com/man_with_calculator_57d8e01049.svg"
              }
            />
          </div>
        </div>
      </div>

       {/*design for small screen */}

       <div className="lg:hidden sm:block flex flex-col justify-center items-center">
         <div className="bg-white w-[300px] h-[500px] rounded-[20px] mt-[10px] p-[10px] flex flex-col">
           <img src={"https://strapi-cdn.osome.com/working_on_laptop_man_4a0ec6e6af.svg"} className='w-[200px]' />
           <p className="font-bold text-2xl mt-4">
            <span className="text-blue-800">Start</span> my business
          </p>
         
          <p className="text-slate-900 font-medium">
          Start your business with fast online company incorporation. Plus, a{" "}
          bank account and registered address from day one.
          </p>
          <button className="border-2 border-blue-800 rounded-[20px] p-[10px] mt-4 flex font-medium justify-center items-center gap-4 text-blue-800" >For locals <span>
                  <AiOutlineArrowRight />
                </span>{" "} </button>
          <button className="border-2 border-blue-800 rounded-[20px] p-[10px] mt-4 font-medium flex justify-center items-center gap-4 text-blue-800 ">For foreigners <span>
                  <AiOutlineArrowRight />
                </span>{" "} </button>
         </div>


         <div className="bg-white w-[300px] h-[500px] rounded-[20px] mt-[10px] p-[10px] flex flex-col">
           <img src={"https://strapi-cdn.osome.com/man_with_calculator_57d8e01049.svg"} className='w-[200px]' />
           <p className="font-bold text-2xl mt-4">
            <span className="text-blue-800">Switch</span> to osome
          </p>
         
          <p className="text-slate-900 font-medium">
          Get expert accounting and corporate secretarial services
           alongside easy-to-use software and unlimited bookkeeping.
          </p>
          <button className="border-2 border-blue-800 rounded-[20px] p-[10px] mt-4 flex font-medium justify-center items-center gap-4 text-blue-800" >  Accounting <span>
                  <AiOutlineArrowRight />
                </span>{" "} </button>
          <button className="border-2 border-blue-800 rounded-[20px] p-[10px] mt-4 font-medium flex justify-center items-center gap-4 text-blue-800 ">Corporate Secretary <span>
                  <AiOutlineArrowRight />
                </span>{" "} </button>
         </div>


       </div>
    </div>
  );
};

export default Doing;
