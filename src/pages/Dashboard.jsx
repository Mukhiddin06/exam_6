import React from 'react'
import { AddIcon, AdminIcon, ClassesIcon } from '../assets/images/Icons'
import SupportButton from '../components/SupportButton'

function Dashboard() {
  return (
    <div className='h-[85vh] overflow-y-auto bg-white pt-[53px] pl-[127px] relative'>
        <h2 className='font-semibold text-[36px] leading-[44.65px] text-[#4F4F4F] mb-[23px]'>Welcome to your dashboard, Udemy school</h2>
        <h3 className='font-semibold text-[24px] leading-[29.77px] text-[#4F4F4F] pl-[105px] mb-[74px]'>Uyo/school/@teachable.com</h3>
        <ul className='pl-[90px] pb-[147px] space-y-[51px]'>
            <li className='flex space-x-[20px]'>
                <AdminIcon/>
                <div>
                    <span className='font-semibold text-[24px] leading-[29.77px] block mb-[16px] text-[#4F4F4F]'>Add other admins</span>
                    <p className='text-[14px] leading-[18.63px] text-[#4F4F4F]'>Create rich course content and coaching products for your students.</p>
                    <p className='text-[14px] leading-[18.63px] text-[#4F4F4F]'>When you give them a pricing plan, they’ll appear on your site!</p>
                </div>
            </li>
            <li className='flex space-x-[20px]'>
                <ClassesIcon/>
                <div>
                    <span className='font-semibold text-[24px] leading-[29.77px] block mb-[16px] text-[#4F4F4F]'>Add classes</span>
                    <p className='text-[14px] leading-[18.63px] text-[#4F4F4F]'>Create rich course content and coaching products for your students.</p>
                    <p className='text-[14px] leading-[18.63px] text-[#4F4F4F]'>When you give them a pricing plan, they’ll appear on your site!</p>
                </div>
            </li>
            <li className='flex space-x-[20px]'>
                <AddIcon/>
                <div>
                    <span className='font-semibold text-[24px] leading-[29.77px] block mb-[16px] text-[#4F4F4F]'>Add students</span>
                    <p className='text-[14px] leading-[18.63px] text-[#4F4F4F]'>Create rich course content and coaching products for your students.</p>
                    <p className='text-[14px] leading-[18.63px] text-[#4F4F4F]'>When you give them a pricing plan, they’ll appear on your site!</p>
                </div>
            </li>
        </ul>
        <div className='absolute bottom-[60px] right-[120px]'>
            <SupportButton/>
        </div>
    </div>
  )
}

export default Dashboard