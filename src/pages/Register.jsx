import React, { useContext, useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { Context } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import Loading from "../assets/images/loading.png"

function Register() {
    const [isLoading, setIsLoading] = useState(false)
    const { setRegister } = useContext(Context)
    const navigate = useNavigate()

    function handleRegisterSubmit(e){
        e.preventDefault()
        const data = {
            login: e.target.login.value,
            password: e.target.password.value
        }
        toast.success('Successfully registered!')
        setIsLoading(true)
        setTimeout(() => {
            setRegister(data)
            navigate(-1)
        }, 1000)
    }

  return (
    <div className={`w-[529px] mx-auto mt-[98px] ${isLoading ? "opacity-60" : ""}`}>
        <Toaster position="top-right" reverseOrder={false}/>
        <h2 className='font-semibold text-[36px] leading-[44.65px] text-[#4F4F4F] mb-[53px] text-center'>Welcome, Sign up</h2>
        <form onSubmit={handleRegisterSubmit} className='pt-[72px] pb-[40px] px-[132px] bg-white w-[512px]' autoComplete='off'>
            <p className='font-inter font-normal text-[16px] leadting-[25px] text-center text-[#667085] mb-[34px]'>It is our great pleasure to have you on board! </p>
            <Input name={"email"} type={"email"} placeholder={"Enter your Email"} extraStyle={"w-full mb-[14px]"}/>
            <Input name={"login"} type={"text"} placeholder={"Create your Login"} extraStyle={"w-full mb-[14px]"}/>
            <Input name={"password"} type={"password"} placeholder={"Create your Password"} extraStyle={"w-full mb-[34px]"}/>
            <Button type={"submit"} extraStyle={"w-full h-[44px] mb-[60px]"}>
                {isLoading? <img src={Loading} alt="loading" className="h-[20px] scale-[2] w-[20px] mx-auto" /> : "Sign Up"}
            </Button>
        </form>
    </div>
  )
}

export default Register