import React from 'react'
import Spiner from '../assets/images/spinner.png'

function Features() {
  return (
    <div className='bg-white h-[85vh] overflow-y-auto pl-[38px] pr-[127px]'>
      <h3 className='text-[25px] font-bold mb-[30px]'>Features</h3>
      <div className='w-[400px] mx-auto mt-[20px]'>
        <h2 className='text-[36px] font-bold'>This part is in progress</h2>
        <img className='mx-auto scale-[2] mt-[100px]' src={Spiner} alt="S[inner" width={200} height={200} />
      </div>
    </div>
  )
}

export default Features