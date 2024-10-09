import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { BellIcon } from '../assets/images/Icons'
import Modal from './Modal'

function Header() {
    const [showModal, setShowModal] = useState(false)
    const { pathname } = useLocation()
    const navigate = useNavigate()

    function handleModalBtn(){
        setShowModal(true)
    }

    function handleLogOutBtn(){
        localStorage.clear()
        navigate('/')
        setShowModal(false);
        window.location.reload();
    }

    return (
        <div className={`flex h-[103px] pt-[34px] pb-[21px] px-[127px] ${pathname == "/" ? "justify-between" : "bg-white justify-end"}`}>
            <div className={`flex flex-col ${pathname == "/" ? "" : "hidden"}`}>
                <p>Learn  how to launch faster</p>
                <p>watch our webinar for tips from our experts and get a limited time offer.</p>
            </div>
            <div className='flex items-center space-x-[48px]'>
                <BellIcon />
                <button onClick={handleModalBtn} className='px-[35px] py-[12px] rounded-[8px] hover:bg-[#509CDB] font-semibold text-[14px] leading-[17.36px] hover:text-white duration-300 active:opacity-65'>Log out</button>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal} extraStyle={"h-[190px]"}>
                <p className="text-center mt-5 font-semibold text-gray-700">Are you sure you want to Log out?</p>
                <div className='flex justify-evenly space-x-4 mt-10'>
                    <button onClick={() => setShowModal(false)} className='px-4 py-2 bg-[#509CDB] text-white rounded-lg hover:bg-blue-600 transition duration-300'>Cancel</button>
                    <button onClick={handleLogOutBtn} className='px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300'>Log Out</button>
                </div>
            </Modal>
        </div>
    )
}

export default Header