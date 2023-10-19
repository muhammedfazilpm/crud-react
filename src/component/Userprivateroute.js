import React from 'react'
import { Navigate } from 'react-router-dom'

function Userprivateroute(props) {
  if(localStorage.getItem('usertocken')){
    return props.children
  }
  else{
   return <Navigate to='/userlogin'/>
  }
}

export default Userprivateroute
