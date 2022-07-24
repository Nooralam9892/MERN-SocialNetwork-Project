import React from 'react'
import{Link} from 'react-router-dom'
import {useState} from 'react';

function Signup() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  
  const  PostData=() =>{
    fetch("/signup",{
      method:"post",
      header:{
        "Content_type":"application/json"
      },
      body:JSON.stringify({
        name:"",
        password:"",
        email:""
      })
    }).then(res=>res.json())
    .then()
  }
  return (
    <div className='mycard'>
      <div className='card auth-card input-field'>
        <h2>InstaBook</h2>
        <input type="text" placeholder='Name' value={name} onChange={(e) =>setName(e.target.value)}/>
        <input type="text" placeholder='Email' value={email} onChange={(e) =>setEmail(e.target.value)}/>
        <input type="text" placeholder='Password' value={password} onChange={(e) =>setPassword(e.target.value)}/>
        <button class="btn waves-effect waves-light #d500f9 purple accent-3" type="submit" name="action">Sing Up</button>
        <h6>
        <Link to='/signin'> Already have a account</Link>
        </h6>
      </div>
    </div>
  )
}

export default Signup