import React, { useContext, useState } from 'react'
import Button from '../components/Button'
import Prev from '../assets/images/prev.svg'
import { useNavigate, useParams } from 'react-router-dom'
import Clear from '../assets/images/clear.svg'
import Loading from "../assets/images/loading.png"
import { Context } from '../context/AuthContext'
import toast, { Toaster } from 'react-hot-toast'

function AddTeacher() {
  const [imgUrl, setImgUrl] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const {user, setUser} = useContext(Context)

  function handleSubmitForm(e){
    e.preventDefault()
    const currentUsers = user || [];
    const data = {
      id: currentUsers.length ? currentUsers[currentUsers.length - 1].id + 1 : 1,
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      about: e.target.about.value,
      class: e.target.class.value,
      gender: e.target.gender.value,
      age: e.target.age.value,
      img: imgUrl 
    }
    setIsLoading(true)
    setTimeout(() => {
      setUser([...user, data])
      setImgUrl(null)
      e.target.reset()
      setIsLoading(false)
      navigate(-1)
      toast.success('Successfully added!')
    }, 1000)
  }



  return (
    <div className='bg-white h-[85vh] overflow-y-auto pl-[38px] pr-[127px]'>
      <Toaster position="top-center" reverseOrder={false}/>
      <form onSubmit={handleSubmitForm} autoComplete='off'>
        <div className='flex items-center justify-between mt-[14px] mb-[38px]'>
          <div className='flex items-center space-x-[15px]'>
            <button onClick={() => navigate("/teachers")}>
              <img src={Prev} alt="Prev" width={25} height={25} />
            </button>
            <h2 className='font-semibold text-[20px] leading-[24.8px] text-[#4F4F4F]'>Add teacher</h2>
          </div>
          <Button type={"submit"} extraStyle={"w-[80px]"}>
            {isLoading ? <img src={Loading} alt="loading" className="h-[20px] scale-[2] w-[20px] mx-auto" /> : "Save"}
          </Button>
        </div>
        <div className='flex space-x-[80px] mt-[17px]'>
          <div className='w-[410px]'>
            <label className='space-y-[5px] flex flex-col mb-[36px]'>
              <span className='text-[14px] leading-[17.36px] text-[#8A8A8A]'>Full Name</span>
              <input type="text" name='name' placeholder='Full Name' className='py-[13px] px-[10px] border-[1px] border-[#A7A7A7] rounded-[4px] outline-none duration-300 focus:border-[#509CDB] text-[14px] leading-[17.36px]' required />
            </label>
            <label className='space-y-[5px] flex flex-col mb-[36px]'>
              <span className='text-[14px] leading-[17.36px] text-[#8A8A8A]'>Email address</span>
              <input type="text" name='email' placeholder='Email address' className='py-[13px] px-[10px] border-[1px] border-[#A7A7A7] rounded-[4px] outline-none duration-300 focus:border-[#509CDB] text-[14px] leading-[17.36px]' required />
            </label>
            <label className='space-y-[5px] flex flex-col mb-[36px]'>
              <span className='text-[14px] leading-[17.36px] text-[#8A8A8A]'>Subject</span>
              <select name='subject' className='py-[13px] px-[10px] border-[1px] border-[#A7A7A7] rounded-[4px] outline-none duration-300 focus:border-[#509CDB] text-[14px] leading-[17.36px]' required>
                <option value='Chemistry'>Chemistry</option>
                <option value='French'>French</option>
                <option value='Maths'>Maths</option>
                <option value='English'>English</option>
                <option value='Geography'>Geography</option>
                <option value='Physic'>Physic</option>
                <option value='Politics'>Politics</option>
              </select>
            </label>
            <label className='space-y-[5px] flex flex-col mb-[36px]'>
              <span className='text-[14px] leading-[17.36px] text-[#8A8A8A]'>About</span>
              <textarea
                name='about'
                placeholder='About'
                className='py-[13px] px-[10px] border-[1px] border-[#A7A7A7] rounded-[4px] outline-none duration-300 focus:border-[#509CDB] text-[14px] leading-[17.36px] resize-none'
                style={{ width: '410px', height: '172px' }}
                required
              />
            </label>
          </div>
          <div className='w-[410px]'>
            <label className='space-y-[5px] flex flex-col mb-[36px]'>
              <span className='text-[14px] leading-[17.36px] text-[#8A8A8A]'>Class</span>
              <select name='class' className='py-[13px] px-[10px] border-[1px] border-[#A7A7A7] rounded-[4px] outline-none duration-300 focus:border-[#509CDB] text-[14px] leading-[17.36px]' required>
                <option value='JSS 1'>JSS 1</option>
                <option value='J SS 2'>J SS 2</option>
                <option value='JSS 3'>JSS 3</option>
                <option value='J SS 4'>J SS 4</option>
                <option value='JSS 5'>JSS 5</option>
                <option value='SS 3'>SS 3</option>
              </select>
            </label>
            <label className='space-y-[5px] flex flex-col mb-[36px]'>
              <span className='text-[14px] leading-[17.36px] text-[#8A8A8A]'>Gender</span>
              <select name='gender' className='py-[13px] px-[10px] border-[1px] border-[#A7A7A7] rounded-[4px] outline-none duration-300 focus:border-[#509CDB] text-[14px] leading-[17.36px]' required>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </select>
            </label>
            <label className={`space-y-[5px] flex flex-col ${imgUrl ? "mb-[36px]" : "mb-[50px]"}`}>
              <span className='text-[14px] leading-[17.36px] text-[#8A8A8A]'>Age</span>
              <input type="number" name='age' placeholder='Age' className='py-[13px] px-[10px] border-[1px] border-[#A7A7A7] rounded-[4px] outline-none duration-300 focus:border-[#509CDB] text-[14px] leading-[17.36px]' required />
            </label>
            <label className='space-y-[5px] flex flex-col mb-[36px] cursor-pointer'>
              <span className='text-[18px] leading-[22.32px]'>Import Img</span>
              <input onChange={(e) => setImgUrl(URL.createObjectURL(e.target.files[0]))} className='hidden' type="file" />
              {imgUrl ?
                <div className='bg-slate-300 rounded-lg p-2 mt-8 relative'>
                  <img src={imgUrl} alt="Choose Img" width={400} height={200} />
                  <button onClick={() => setImgUrl(null)} type='button' className='absolute top-3 right-3 p-2 rounded-md bg-white'>
                    <img src={Clear} alt="Clear" width={18} height={18} />
                  </button>
                </div> : ""}
            </label>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddTeacher