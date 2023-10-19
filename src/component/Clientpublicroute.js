import React from 'react'
import { Navigate } from 'react-router-dom'

function Clientpublicroute(props) {
 if(localStorage.getItem('clienttocken')){
    
    return (<Navigate to='/clienthome'/>)
 }
 else{
    return props.children
 }
}

export default Clientpublicroute
