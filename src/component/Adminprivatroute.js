import React from 'react'
import { Navigate } from 'react-router-dom' 

function Adminprivatroute(props) {
 if(localStorage.getItem('admintocken')){
    return(
<Navigate to='/adminhome'/>
    )
 }
 else{
    return props.children
 }
}

export default Adminprivatroute
