import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Adminlogin() {
    const navigate=useNavigate()
    const user="admin"
    const password="admin"
    const[username,setuserName]=useState('')
    const[password1,setPassword]=useState('')
    const checkdetails=()=>{
        if(user===username&&password1===password){
             alert("redirecting to admin home page")
             localStorage.setItem('admintocken',"123456")
             navigate('/adminhome')
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

export default Adminlogin
