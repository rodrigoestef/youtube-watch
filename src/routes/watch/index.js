import React from 'react'
import { useUrl } from "../../context/urlContext";

export default () =>{
    const {url} = useUrl()
    return(
        <h1>{url}</h1>
    )
}