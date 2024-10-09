import React from 'react'

function Button({type, onClick, extraStyle, children}) {
  return (
    <button type={type} onClick={onClick} className={`py-[12px] px-[14px] text-white font-bold text-[14px] leading-[17.36px] rounded-[4px] bg-[#2D88D4] hover:opacity-65 duration-300 ${extraStyle}`}>
        {children}
    </button>
  )
}

export default Button