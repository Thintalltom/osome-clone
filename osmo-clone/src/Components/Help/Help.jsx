import React from "react";
import './Help.css'

const Help = () => {
  return (
    <div className="otherScreen">
      <div className="text-center lg:mt-4 ">
        <p>WHO WE HELP</p>
        <p className="font-medium lg:text-5xl sm:text-lg ">
          For founders ready to ditch <br /> the books and do the business
        </p>
      </div>

      <div className="mt-[30px] ">
        <div className="lg:flex lg:flex-row  sm:flex justify-around sm:flex-col otherFlex">
          <img
            src={
              "https://strapi-cdn.osome.com/full_smiling_sg_man_165a376297.webp"
            }
            className="rounded-[20px] otherImage"
          />
          <div className="flex flex-col smallColo  sm:items-center  justify-center items-center  sm:w-[200px] lg:w-[600px]">
            <img
              src={
                "https://strapi-cdn.osome.com/full_cutting_a_tape_a8024a8c2f.webp"
              }
              className="w-[400px] otherImage2"
            />
            <p className="font-medium coloText text-3xl   text-center mt-4">
              Solo founders who want to reclaim their weekends from
              financial admin
            </p>
          </div>
        </div>

        <div className="lg:flex lg:flex-row-reverse sm:flex justify-around sm:flex-col otherFlex sm:p-[1px] lg:p-[20px]">
          <img
            src={
              "https://strapi-cdn.osome.com/full_smiling_business_owner_woman_b969632f56.webp"
            }
            className="rounded-[20px] otherImage"
          />
          <div className="flex flex-col  justify-center  items-center sm:w-[200px] lg:w-[600px]">
            <img
              src={
                "https://strapi-cdn.osome.com/full_content_picture_working_people_7fc4405dd6.webp"
              }
              className="w-[400px] otherImage2"
            />
            <p className="font-medium lg:text-3xl sm:text-sm text-center mt-4">
              Business owners who know their needs <br /> and value quality service
            </p>
          </div>
        </div>

        <div className="lg:flex lg:flex-row  sm:flex justify-around otherFlex sm:flex-col sm:p-[1px] lg:p-[20px]">
          <img
            src={
              "https://strapi-cdn.osome.com/full_working_on_a_laptop_sg_man_22293959d0.webp"
            }
            className="rounded-[20px] otherImage"
          />
          <div className="flex flex-col  justify-center  items-center sm:w-[200px] lg:w-[600px]">
            <img
              src={
                "https://strapi-cdn.osome.com/full_peace_of_mind_c757e62938.webp"
              }
              className="w-[300px] otherImage2"
            />
            <p className="font-medium lg:text-3xl sm:text-sm text-center mt-4">
              Business owners who know their needs <br /> and value quality service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
