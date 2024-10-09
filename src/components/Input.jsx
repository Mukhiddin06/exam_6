import React from 'react'

function Input({type, placeholder, extraStyle, name}) {
  return (
    <input type={type} placeholder={placeholder} required name={name} className={`p-[13px] text-[14px] leading-[17.36px] font-normal border-solid duration-300 focus:border-[#2D88D4] focus:shadow-md rounded-[4px] border-[#A7A7A7] outline-none border-[1px] placeholder:text-[#8A8A8A] ${extraStyle}`} />
  )
}

export default Input