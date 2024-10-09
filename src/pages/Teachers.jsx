import React, { useContext, useState } from 'react'
import Button from '../components/Button'
import { SearchIcon } from '../assets/images/Icons'
import Sleep from '../assets/images/sleep.svg'
import SupportButton from '../components/SupportButton'
import Trash from '../assets/images/trash.svg'
import More from '../assets/images/more.svg'
import Teacher from '../assets/images/Teacher.png'
import { useNavigate } from 'react-router-dom'
import { Context } from '../context/AuthContext'
import Modal from '../components/Modal'
import toast, { Toaster } from 'react-hot-toast'

function Teachers() {
  const [search, setSearch] = useState('')
  const [isshowModal, setIsShowModal] = useState(false)
  const [isDelete, setIsDelete] = useState(null)
  const navigate = useNavigate()
  const { user, deleteUser } = useContext(Context)

  function handleDelete(id){
    setIsDelete(id)
    setIsShowModal(true)
  }

  function handleDeleteItem(){
    deleteUser(isDelete)
    setIsShowModal(false)
    toast.success('Successfully deleted!')

  }

  const filteredUsers = user.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.email.toLowerCase().includes(search.toLowerCase())
  )


  return (
    <div className='bg-white h-[85vh] overflow-y-auto pl-[38px] pr-[127px]'>
      <Toaster position="top-center" reverseOrder={false}/>
      <div className='flex items-center justify-between mb-[28px]'>
        <h2 className='font-semibold text-[20px] leading-[24.8px] text-[#4F4F4F]'>Teachers</h2>
        <Button onClick={() => navigate("/teachers/add")} extraStyle={"w-[118px] font-semibold"}>Add Teachers</Button>
      </div>
      <label className='flex items-center space-x-[16px] p-[16px] bg-[#FCFAFA] rounded-[8px] mb-[30px]'>
        <SearchIcon />
        <input value={search} onChange={(e) => setSearch(e.target.value) } type="text" placeholder='Search for a student by name or email' className='placeholder:text-[#8A8A8A] bg-[#FCFAFA] w-full font-normal text-[14px] leading-[17.36px] outline-none' />
      </label>
      {filteredUsers.length > 0 ? (
        <table className='w-full'>
          <thead>
            <tr>
              <th className='text-start py-[16px] pl-[8px] text-[12px] leading-[14.88px] text-[#424242]'>Name</th>
              <th className='text-start py-[16px] pl-[8px] text-[12px] leading-[14.88px] text-[#424242]'>Subject</th>
              <th className='text-start py-[16px] pl-[8px] text-[12px] leading-[14.88px] text-[#424242]'>Class</th>
              <th className='text-start py-[16px] pl-[8px] text-[12px] leading-[14.88px] text-[#424242]'>Email address</th>
              <th className='text-start py-[16px] pl-[8px] text-[12px] leading-[14.88px] text-[#424242]'>Gender</th>
              <th className='text-start py-[16px] pl-[8px] text-[12px] leading-[14.88px] text-[#424242]'>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(item => (
              <tr key={item.id} className={`odd:bg-white even:bg-[#EBF6FF80] hover:bg-slate-50`}>
                <td className='pl-[8px] py-[12px]'>
                  <div className='flex items-center space-x-[8px]'>
                    <img className='rounded-full' src={item.img} alt="Teacher" width={24} height={24} />
                    <p className='text-[12px] leading-[14.88px] text-[#4F4F4F]'>{item.name}</p>
                  </div>
                </td>
                <td className='text-[12px] leading-[14.88px] text-[#4F4F4F] pl-[8px] py-[12px]'>{item.subject}</td>
                <td className='text-[12px] leading-[14.88px] text-[#4F4F4F] pl-[8px] py-[12px]'>{item.class}</td>
                <td className='text-[12px] leading-[14.88px] text-[#4F4F4F] pl-[8px] py-[12px]'>{item.email}</td>
                <td className='text-[12px] leading-[14.88px] text-[#4F4F4F] pl-[8px] py-[12px]'>{item.gender}</td>
                <td className='pl-[8px] py-[12px]'>
                  <div className='flex items-center space-x-[10px]'>
                    <button onClick={() => handleDelete(item.id)} className='hover:scale-150 duration-300'>
                      <img src={Trash} alt="Delete" width={15} height={15} />
                    </button>
                    <button onClick={() => navigate(`/teachers/${item.id}`)} className='hover:scale-150 duration-300'>
                      <img src={More} alt="More" width={15} height={15} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className='bg-[#FCFAFA] h-[420px] relative'>
          <img className='mx-auto mt-[15px]' src={Sleep} alt="No Data" width={340} height={255} />
          <h2 className='font-semibold text-[28px] leading-[34.73px] text-[#4F4F4F] text-center mt-[10px]'>No Teachers at this time</h2>
          <p className='font-normal text-[14px] leading-[17.36px] mt-[4px] text-[#4F4F4F] text-center'>Teachers will appear here after they enroll in your school.</p>
          <div className='absolute bottom-[35px] right-[20px]'>
            <SupportButton />
          </div>
        </div>
      )}
      <Modal showModal={isshowModal} setShowModal={setIsShowModal} extraStyle={"h-[190px]"}>
        <p className="text-center mt-5 font-semibold text-gray-700">Are you sure you want to this delete?</p>
        <div className='flex justify-evenly space-x-4 mt-10'>
          <button onClick={() => setIsShowModal(false)} className='px-4 py-2 bg-[#509CDB] text-white rounded-lg hover:bg-blue-600 transition duration-300'>Cancel</button>
          <button onClick={handleDeleteItem} className='px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300'>Delete</button>
        </div>
      </Modal>
    </div>
  )
}

export default Teachers