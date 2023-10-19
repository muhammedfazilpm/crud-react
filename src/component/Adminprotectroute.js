import React from 'react'
import { Navigate } from 'react-router-dom'

function Adminprotectroute(props) {
    if(localStorage.getItem('admintocken')){
        return  props.children
    }
    else{
        return(
       <Navigate to='/adminlogin'/>
         )
    }
  
}

export default Adminprotectroute
