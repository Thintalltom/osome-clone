import React from 'react'

const Help = () => {
  return (
    <div>
        <div className='text-center mt-4'>
            <p>WHO WE HELP</p>
            <p className='font-medium text-5xl '>For founders ready to ditch <br /> the books and do the business</p>
        </div>

        <div className='mt-[30px]'>
            <div className='flex justify-around'>
                <img src={'https://strapi-cdn.osome.com/full_smiling_sg_man_165a376297.webp'} className='rounded-[20px]' />
            <div className='flex flex-col bg-white justify-center items-center w-[600px]'>
                <img src={'https://strapi-cdn.osome.com/full_cutting_a_tape_a8024a8c2f.webp'} className='w-[400px]' />
                <p className='font-medium text-3xl text-center mt-4'>Solo founders who want to <br /> reclaim their weekends from financial admin</p>
            </div>
           
            </div>

            <div className='flex flex-row-reverse justify-around  p-[20px]'>
                <img src={'https://strapi-cdn.osome.com/full_smiling_business_owner_woman_b969632f56.webp'} className='rounded-[20px]' />
            <div className='flex flex-col bg-white justify-center items-center w-[600px]'>
                <img src={'https://strapi-cdn.osome.com/full_content_picture_working_people_7fc4405dd6.webp'} className='w-[400px]' />
                <p className='font-medium text-3xl text-center mt-4'>Business owners who know their needs and value quality service</p>
            </div>
           
            </div>

            <div className='flex  justify-around  p-[20px]'>
                <img src={'https://strapi-cdn.osome.com/full_working_on_a_laptop_sg_man_22293959d0.webp'} className='rounded-[20px]' />
            <div className='flex flex-col bg-white justify-center items-center w-[600px]'>
                <img src={'https://strapi-cdn.osome.com/full_peace_of_mind_c757e62938.webp'} className='w-[300px]' />
                <p className='font-medium text-3xl text-center mt-4'>Business owners who know their needs and value quality service</p>
            </div>
           
            </div>
            
        </div>
    </div>
  )
}

export default Help