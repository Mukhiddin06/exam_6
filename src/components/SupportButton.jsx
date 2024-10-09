import React from 'react'
import { SupportIcon, VectorIcon } from '../assets/images/Icons'

function SupportButton() {
  return (
    <button className='flex items-center bg-[#152259] py-[22px] px-[24px] rounded-[30px]'>
        <SupportIcon/>
        <p className='font-semibold text-[14px] leading-[17.36px] text-[#FCFAFA] pl-[8px] pr-[39px]'>Support</p>
        <VectorIcon/>
    </button>
  )
}

export default SupportButton