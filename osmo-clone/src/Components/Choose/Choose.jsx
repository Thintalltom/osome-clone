import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";

const Choose = () => {
  return (
    <div className='bg-slate-200 w-full  p-4'>

        <div>
            <p className='text-slate-700 text-center mt-4'>WHY CHOOSE US</p>
            <p className='text-slate-900 text-4xl text-center font-medium'>From founding to filing and <br /> beyond, we’re with you</p>
        </div>

        <div>
            <div className='flex justify-around mt-[20px] '>
                <img  className='rounded-[20px]' src={"https://strapi-cdn.osome.com/full_uk_accountants_80f2ab7f94.webp"} />
                <div>
                    <p className='font-bold text-3xl'>Accountants that know your business</p>
                    <p>We take a proactive approach to help you <br /> make informed 
                        financial decisions to grow <br /> revenue.
                         Our team helps you pay the right tax, <br />
                         track deadlines and manage filing.</p>

                    <button className=' mt-[30px] flex justify-between gap-[10px] hover:bg-slate-900 hover:text-white font-bold  rounded-[30px] p-4  border-slate-900 border-2 text-slate-900 '>
                        Learn more   <AiOutlineArrowRight className='text-slate-900 hover:text-white' />
                    </button>
                </div>
            </div>

            <div className='flex justify-around p-4 mt-[20px]'>
                <div>
                <p className='font-bold text-3xl'>Smart software made for <br />  business owners <br /></p>
                    <p>Our in-house software helps manage <br />  bookkeeping, invoicing and much more.
                         It's <br /> your financial data, all in one place.</p>

                    <button className=' mt-[30px] flex justify-between gap-[10px] hover:bg-slate-900 hover:text-white font-bold  rounded-[30px] p-4  border-slate-900 border-2 text-slate-900 '>
                        Watch Demo  <AiOutlineArrowRight className='text-slate-900 hover:text-white' />
                    </button>
                </div>
                <img src='https://strapi-cdn.osome.com/full_software_sg_8e75ccdc65.webp'  className='rounded-[20px]'/>


            </div>
        </div>
    </div>
  )
}

export default Choose