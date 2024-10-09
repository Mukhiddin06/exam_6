import React, { useContext } from 'react'
import Prev from '../assets/images/prev.svg'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../components/Button'
import { Context } from '../context/AuthContext'
import { BookIcon, MassageIcon, TelIcon } from '../assets/images/Icons'

function SingleTeacher() {
  const navigate = useNavigate()
  const { id } = useParams()
  const { user } = useContext(Context)

  const teacher = user.find(item => item.id == id)

  console.log(teacher)

  return (
    <div className='bg-white h-[85vh] overflow-y-auto pl-[38px] pr-[127px]'>
      <div className='flex items-center justify-between mt-[14px] mb-[38px]'>
        <button onClick={() => navigate("/teachers")}>
          <img src={Prev} alt="Prev" width={25} height={25} />
        </button>
        <Button onClick={() => navigate(`/teachers/${teacher.id}/uptade`)} type={"submit"} extraStyle={"w-[80px]"}>Uptede</Button>
      </div>
      <div className='flex space-x-[110px]'>
        <div className='ml-[160px] w-[280px]'>
          <img className='object-cover rounded-full' src={teacher.img} alt="Teacher" width={280} height={280} />
          <h2 className='font-bold text-[16px] leading-[19.84px] text-[#1A1A1A] text-center mt-[50px] mb-[5px]'>{teacher.name}</h2>
          <p className='font-semibold text-[12px] leading-[14.88px] text-[#4F4F4F] text-center mb-[40px]'>{teacher.email}</p>
          <div className='flex items-center justify-between w-[233px] mx-auto'>
            <BookIcon />
            <TelIcon />
            <MassageIcon />
          </div>
        </div>
        <ul className='w-[360px]'>
          <li>
            <h3 className='font-semibold text-[16px] leading-[19.84px] text-[#1A1A1A] mb-[10px]'>About</h3>
            <p className='font-normal text-[16px] leading-[21px] text-[#A7A7A7] mb-[20px]'>{teacher.about}</p>
          </li>
          <li className='space-y-[25px]'>
            <ul className='flex space-x-[100px]'>
              <li>
                <span className='font-semibold text-[12px] leading-[14.88px] mb-[7px] text-[#1A1A1A]'>Subject</span>
                <p className='text-[14px] leading-[17.36px] text-[#A7A7A7]'>{teacher.subject}</p>
              </li>
              <li>
                <span className='font-semibold text-[12px] leading-[14.88px] mb-[7px] text-[#1A1A1A]'>Class</span>
                <p className='text-[14px] leading-[17.36px] text-[#A7A7A7]'>{teacher.class}</p>
              </li>
            </ul>
            <ul className='flex space-x-[100px]'>
              <li>
                <span className='font-semibold text-[12px] leading-[14.88px] mb-[7px] text-[#1A1A1A]'>Age</span>
                <p className='text-[14px] leading-[17.36px] text-[#A7A7A7]'>{teacher.age}</p>
              </li>
              <li>
                <span className='font-semibold text-[12px] leading-[14.88px] mb-[7px] text-[#1A1A1A]'>Gender</span>
                <p className='text-[14px] leading-[17.36px] text-[#A7A7A7]'>{teacher.gender}</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SingleTeacher