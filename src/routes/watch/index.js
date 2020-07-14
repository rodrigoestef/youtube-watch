import React, { useState, useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import { useUrl } from "../../context/urlContext";
import { Search } from "./styles";

export default () =>{
    const {url,setUrl} = useUrl()
    const [text,setText] = useState('')
    const history = useHistory()
    const videoId = url.split('v=')[1]
    if (!videoId) {
        history.push('/')
    }

    const click = ({key,target}) =>{
        if (key == 'Enter') {
            setUrl(target.value)
        }
    }

    useEffect(()=>{
        setText(url)
    },[])

    return(
        <>
            <Search value ={text} onChange={e=> setText(e.target.value)} onKeyUp={e => click({key: e.key,target:e.target})}/>
            <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${videoId}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </>
    )
}