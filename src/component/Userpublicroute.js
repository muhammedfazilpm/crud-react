import React from 'react'
import { Navigate } from 'react-router-dom'
function Userpublicroute(props) {
  if(localStorage.getItem('usertocken')){
    return <Navigate to='/userhome'/>
  }
  else{
    return props.children
  }
}

export default Userpublicroute
