import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div>
      <div className="p-4">
        <p className="text-slate-500 text-center ">TESTIMONNIALS</p>
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

        <div className="flex justify-around p-[20px]">
            <img src="https://strapi-cdn.osome.com/full_video_felix_lee_85065ce24a.webp" className="w-[800px] h-[500px] rounded-[20px]"/>

            <div className="bg-blue-500 w-[400px] h-p500px] rounded-[20px] p-[20px]">
            <p className="text-slate-200">FACTS AND NUMBERS</p>
            <p className="text-8xl text-white mt-[200px] font-bold">91%</p>
            <p className="text-white text-4xl font-bold">of customers <br /> recommend Osome  services</p>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
