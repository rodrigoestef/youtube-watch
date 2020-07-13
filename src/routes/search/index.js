import React from 'react'
import {useHistory} from 'react-router-dom'
import {Background,Search} from './styles'
import { useUrl } from "../../context/urlContext";

export default () =>{
    const {url,setUrl} = useUrl()
    const history = useHistory()
    const enter = ({key,target}) =>{
        if (key == 'Enter') {
            history.push('/video')
        }else{
            setUrl(target.value)
        }
    }
    return(
        <Background>
            <Search onKeyUp={e=> enter({key: e.key,target:e.target})} placeholder='insira a URL do video aqui'/>
        </Background>
    )
}