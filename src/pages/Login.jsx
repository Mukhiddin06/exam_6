import React, { useContext, useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { Context } from '../context/AuthContext'
import toast, { Toaster } from 'react-hot-toast'
import Loading from "../assets/images/loading.png"

function Login() {
    const { register, setToken } = useContext(Context)
    const [isLoading, setIsLoading] = useState(false)

    function handleLoginSubmit(e) {
        e.preventDefault()
        const data = {
            login: e.target.login.value.trim(),
            password: e.target.password.value
        }
        if (register) {
            if (register.login == data.login && register.password == data.password) {
                setIsLoading(true)
                toast.success('Welcome ' + data.login)
                setTimeout(() => {
                    setIsLoading(false)
                    setToken(data)
                }, 1000)
            }
            else {
                setIsLoading(true)
                setTimeout(() => {
                    setIsLoading(false)
                    toast.error('Invalid login or password!')
                }, 1000)
            }
        }
        else {
            if (data.login == "Muhiddin" && data.password == "3301") {
                setIsLoading(true)
                toast.success('Welcome' + data.login)
                setTimeout(() => {
                    setIsLoading(false)
                    setToken(data)
                }, 1000)
            }
            else {
                setIsLoading(true)
                setTimeout(() => {
                    setIsLoading(false)
                    toast.error('Invalid login or password!')
                }, 1000)
            }
        }
    }

    return (
        <>
            <div className={`w-[529px] mx-auto mt-[184px] ${isLoading ? "opacity-60" : ""}`}>
                <Toaster position="top-right" reverseOrder={false} />
                <h2 className='font-semibold text-[36px] leading-[44.65px] text-[#4F4F4F] mb-[53px]'>Welcome, Log into you account</h2>
                <form onSubmit={handleLoginSubmit} className='pt-[72px] pb-[40px] px-[132px] bg-white w-[512px]' autoComplete='off'>
                    <p className='font-inter font-normal text-[16px] leadting-[25px] text-center text-[#667085] mb-[20px]'>It is our great pleasure to have you on board! </p>
                    <Input name={"login"} type={"text"} placeholder={"Enter your Login"} extraStyle={"w-full mb-[14px]"} />
                    <Input name={"password"} type={"password"} placeholder={"Enter Password"} extraStyle={"w-full mb-[14px]"} />
                    <Button type={"submit"} extraStyle={"w-full h-[44px] mb-[14px]"}>
                        {isLoading ? <img src={Loading} alt="loading" className="h-[20px] scale-[2] w-[20px] mx-auto" /> : "Login"}
                    </Button>
                    <Link to={"/sign-up"} className='font-bold text-[14px] leading-[24px] text-[#2D88D4] text-center block'>Sign up</Link>
                </form>
            </div>
        </>
    )
}

export default Login