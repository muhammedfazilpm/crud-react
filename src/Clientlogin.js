import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Clientlogin() {
    const navigate=useNavigate()
    const user="fazil"
    const password="fazil"
    const[username,setuserName]=useState('')
    const[password1,setPassword]=useState('')
    const checkdetails=()=>{
        if(user===username&&password1===password){
             alert("redirecting to home page")
             localStorage.setItem('clienttocken','123456')
             navigate('/clienthome')
        }
        else{
            alert("enter the correct details")
        }
    }
  return (
    <div>
    <p>login</p>
    <input onChange={(e)=>{
        setuserName(e.target.value)

    }}/>
    <br/>
    <input onChange={(e)=>{
        setPassword(e.target.value)
    }}/>
    <br/>
    <button onClick={()=>{
        checkdetails()
    }} >login</button>
    </div>
  )
}

export default Clientlogin
