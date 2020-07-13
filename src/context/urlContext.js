import React,{createContext, useState,useContext} from 'react'

const Context = createContext()

export default ({children}) =>{
    const [url,setUrl] = useState('')
    return (
        <Context.Provider value={{url,setUrl}}>{children}</Context.Provider>
    )
}

export const useUrl = () =>{
    return useContext(Context)
}