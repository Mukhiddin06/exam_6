import { createContext, useState } from "react";


export const Context = createContext()

export const AuthContext = ({children}) => {
    const [token, setToken] = useState( JSON.parse(localStorage.getItem("token")) || null)

    const [register, setRegister] = useState(null)


    localStorage.setItem("token", JSON.stringify(token))

    const [user, setUser] = useState( JSON.parse(localStorage.getItem("user")) || [])


    localStorage.setItem("user", JSON.stringify(user))

    function deleteUser(id){
        const deleteIndex = user.findIndex(item => item.id == id)
        user.splice(deleteIndex, 1)
        setUser([...user])
    }

    return (
        <Context.Provider value={{token, setToken, register, setRegister, user, setUser, deleteUser }}>{children}</Context.Provider>
    )
}