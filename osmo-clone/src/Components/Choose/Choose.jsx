import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import './Choose.css'

const Choose = () => {
  return (
    <div className='bg-amber-50  p-4'>

        <div className=' flex justify-center items-center p-4'>
            <div className=' w-[600px]'>
            <p className='text-slate-700 text-center mt-4'>WHY CHOOSE US</p>
            <p  id='founding' className='text-slate-900 text-4xl text-center font-medium'>From founding to filing and  beyond, we’re with you</p>
            </div>
           
        </div>

        <div>
            <div id='acct' className='flex  justify-around mt-[20px] '>
                <img  className='rounded-[20px] sm:rounded-[30px]' src={"https://strapi-cdn.osome.com/full_uk_accountants_80f2ab7f94.webp"} />
                <div className='w-[500px]  p-4' id='approach'>
                    <p className='font-bold text-3xl'>Accountants that know your business</p>
                    <p >We take a proactive approach to help you make informed 
                        financial decisions to grow  revenue.
                         Our team helps you pay the right tax, 
                         track deadlines and manage filing.</p>

                    <button id='acctImage' className=' mt-[30px] flex justify-between gap-[10px] hover:bg-slate-900 hover:text-white font-bold  rounded-[30px] p-4  border-slate-900 border-2 text-slate-900 '>
                        Learn more   <AiOutlineArrowRight className='text-slate-900 hover:text-white' />
                    </button>
                </div>
            </div>

            <div id='soft' className='flex  justify-around  mt-[20px]'>
                <div className=' w-[500px]' id='wrap'>
                <p className='font-bold text-3xl'>Smart software made for <br />  business owners <br /></p>
                    <p className='bookkeep'>Our in-house software helps manage   bookkeeping, invoicing and much more.
                         It's  your financial data, all in one place.</p>

                    <button className=' mt-[30px] flex justify-between gap-[10px] hover:bg-slate-900 hover:text-white font-bold  rounded-[30px] p-4  border-slate-900 border-2 text-slate-900 '>
                        Watch Demo  <AiOutlineArrowRight className='text-slate-900 hover:text-white' />
                    </button>
                </div>
                <img id='wrapImg' src='https://strapi-cdn.osome.com/full_software_sg_8e75ccdc65.webp'  className='rounded-[20px]'/>


            </div>
        </div>
    </div>
  )
}

export default Choose