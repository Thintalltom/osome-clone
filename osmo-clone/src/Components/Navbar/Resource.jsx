import React from 'react'

const Resource = () => {
  return (

         <div className="bg-white-300 w-full h-[300px]">
          <div>
            <hr className="bg-blue-500" />
            <div className="flex justify-around justify-items-start p-4">
              <div>
                <p className="font-medium text-lg text-slate-900">Resources</p>
                <p className="text-slate-500">
                  Company in singapore guided by local expert
                </p>
              </div>
              <div>
                <p className="text-slate-500 hover:bg-slate-200 p-[13px] rounded-[20px] ">
                  LEARN{" "}
                </p>
                <p className="text-slate-500 hover:bg-slate-200 p-[13px] rounded-[20px] ">
                  Webinar
                </p>
                <p className="text-slate-900 font-medium hover:bg-slate-200 p-[13px] rounded-[20px]">
                  Guides
                </p>
                <p className="text-slate-900 font-medium hover:bg-slate-200 p-[13px] rounded-[20px]">
                  Customers stories{" "}
                </p>
                <p className="text-slate-900 font-medium hover:bg-slate-200 p-[13px] rounded-[20px]">
                  Business vocabulary{" "}
                </p>
              </div>
              <div>
                <p className="text-slate-500 hover:bg-slate-200 p-[13px] rounded-[20px]">
                  FREE TOOLS
                </p>
                <p className="text-slate-900 font-medium hover:bg-slate-200 p-[13px] rounded-[20px]">
                  Company Name Search
                </p>
                <p className="text-slate-900 font-medium hover:bg-slate-200 p-[13px] rounded-[20px]">
                  SSIC Code Search
                </p>
                <p className="text-slate-900 font-medium hover:bg-slate-200 p-[13px] rounded-[20px]">
                  Founder's Career Test{" "}
                </p>
                <p className="text-slate-900 font-medium hover:bg-slate-200 p-[13px] rounded-[20px]">
                  eBay Fee Calculator{" "}
                </p>
                <p className="text-slate-900 font-medium hover:bg-slate-200 p-[13px] rounded-[20px]">
                  Margin calculator{" "}
                </p>
              </div>

              <div className="bg-blue-700 rounded-[20px] w-[400px] h-[300px]">
                <div className="flex p-4  justify-between">
                  <p className="text-2xl font-bold">Expert Guides </p>
                  <button className="text-blue-800 h-[50px] font-medium rounded-[20px] p-4 bg-white">
                    Explore{" "}
                  </button>
                </div>
                <div className="text-white font-medium p-4 mt-[50px]">
                  <p>How to start a business</p>
                  <p>What is an emplyment plan</p>
                  <p>How to register a company</p>
                </div>
              </div>
            </div>
          </div>
        </div>

  )
}

export default Resource