import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/images/logo.svg'
import { BillingIcon, DashboardIcon, ExamsIcon, FeaturesIcon, SettingsIcon, StudentsIcon } from '../assets/images/Icons'

function Navbar() {
    const NavBarlist = [
        {
            id: 1,
            icon: <DashboardIcon />,
            title: "Dashboard",
            to: '/'
        },
        {
            id: 2,
            icon: <DashboardIcon />,
            title: "Teachers",
            to: '/teachers'
        },
        {
            id: 3,
            icon: <StudentsIcon />,
            title: "Students",
            to: '/students'
        },
        {
            id: 4,
            icon: <BillingIcon />,
            title: "Billing",
            to: '/billing'
        },
        {
            id: 5,
            icon: <SettingsIcon />,
            title: "Settings and profile",
            to: '/settings'
        },
        {
            id: 6,
            icon: <ExamsIcon />,
            title: "Exams",
            to: '/exams'
        },
    ]


    return (
        <div className='w-[20%] h-[100vh] overflow-y-auto bg-[#152259]'>
            <div className='mt-[26px] pb-[40px] border-b-[1px] border-[#BDBDBD]'>
                <Link className='w-[65px] block mx-auto' to={"/"}>
                    <img src={Logo} alt="Logo" width={65} height={65} />
                </Link>
                <h2 className='text-center font-semibold text-[14px] leading-[17.36px] text-white mt-[22px]'>Udemy Inter. school</h2>
            </div>
            <div className='mt-[16px] mx-[30px]'>
                {NavBarlist.map(item => (
                    <NavLink to={item.to} className={"flex items-center space-x-[16px] py-[12px] pl-[16px] mb-[8px]"} key={item.id}>
                        {item.icon}
                        <span className='font-semibold text-[14px] leading-[17.36px] text-white'>{item.title}</span>
                    </NavLink>
                ))}
                <div className='mt-[106px] flex items-center relative space-x-[26px]'>
                    <NavLink to={"/features"} className={"flex items-center space-x-[16px] py-[12px] pl-[16px] mb-[8px] w-full"}>
                        <FeaturesIcon/>
                        <span className='font-semibold text-[14px] leading-[17.36px] text-white'>Features</span>
                        <div className='text-[10px] absolute leading-[12.4px] font-semibold rounded-[8px] bg-[#B9D7F1] py-[1px] px-[8px] right-[70px] top-[14px]'>NEW</div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar