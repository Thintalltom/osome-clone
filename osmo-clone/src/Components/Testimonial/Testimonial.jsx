import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import './Testimonials.css'

const Testimonial = () => {
  return (
    <div>
      <div className="p-4 testimon">
        <p className="text-slate-500 text-center ">TESTIMONIALS</p>
        <p className="text-center text-3xl font-bold">
          {" "}
          What our clients think about <br /> Osome services{" "}
        </p>
        <div className="text-center  flex justify-center items-center gap-4 mt-4">
          <FcGoogle className="text-4xl" />
          <div className="flex text-orange-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p>569 Reviews</p>
        </div>

        <div className="flex justify-around p-[20px] numbers">
          <div className="imgCase">
          <img
            src="https://strapi-cdn.osome.com/full_video_felix_lee_85065ce24a.webp"
            className="w-[800px] h-[500px] rounded-[20px]" id="osomeMan"
          />
          </div>
          

          <div className="bg-blue-500 w-[400px] h-[500px] rounded-[20px] p-[20px]" id="box">
            <p className="text-slate-200">FACTS AND NUMBERS</p>
            <p className="text-8xl text-white mt-[200px] font-bold">91%</p>
            <p className="text-white text-4xl font-bold">
              of customers <br /> recommend Osome services
            </p>
          </div>
        </div>

        <div className="flex justify-around  justify-center p-4 items-center" id="customerReview">
          <div className=" bg-slate-800 w-[500px] h-[400px] rounded-[20px] p-4 text-white" id="customerRBox">
            <p className="text-slate-200 ">CUSTOMER STORIES</p>
            <p className="text-3xl mt-4">
              How Dabao Saved 10 Hours And Reinvested Into Business Growth.
            </p>
          </div>
          <div className="bg-slate-200 w-[700px] h-[400px] rounded-[20px] p-4 "  id="customerRBox">
            <p className="text-slate-500">REVIEW</p>
            <p className="text-3xl text-slate-900 mt-4" id='smallerText'>
              “The good thing about Osome is that it saves a lot of time so I
              can do other things – the running of the business part.”
            </p>
            <p className="mt-[180px]" id='jenny'>Jennifer Widjala</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
