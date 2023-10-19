import React from 'react'
import { Navigate } from 'react-router-dom'

function Clientprivatroute(props) {
 if(localStorage.getItem('clienttocken')){
return props.children
 }
 else{
    return <Navigate to='/clientlogin'/>

 }
}

export default Clientprivatroute
