import React, { useState } from 'react'
import axios from 'axios'

function Clienthome() {
    const[heading,setHeading]=useState('')
    const[description,setDescription]=useState('')

    const sendpost=()=>{

    }
  return (
    <div>
      <p>Client home</p>

      <input onChange={(e)=>{
        setHeading(e.target.value)
      }} />
      <br/>
      <br/>
      <textarea onChange={(e)=>{
        setDescription(e.target.value)

      }}/>
      <br/>
      <button onClick={()=>{
        sendpost()
      }} >addpost</button>

    </div>
  )
}

export default Clienthome
