import Axios from 'axios';
import React,{useContext, useState} from 'react'
import UserContext from '../context/UserContext';
import {useHistory} from "react-router-dom"

  

const Register = () => {
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [confirmpassword,setConfirmpasswod]=useState();

  //enable context
  const {setUserData}=useContext(UserContext)
  const history=useHistory()
  
  //const login=history.push('/login')

  const submit=async(e)=>{
    e.preventDefault();
    const newUser={
      email:email,
      password:password,
      confirmpassword:confirmpassword,
      name:name
    }
    //register
    await Axios.post("http://localhost:5000/users/register",newUser)
    //get wetkn from login
    const Response_from_login=await Axios.post("http://localhost:5000/users/login",{email,password})
    setUserData({
      user:Response_from_login.data.user,
      webtkn:Response_from_login.data.webtkn
    })
    //store webtoken in broweser
    localStorage.setItem("auth-token",Response_from_login.webtkn)
    history.push("/home")
  }

  return(
  <body>
    <h2>Register Page</h2><br></br>
    <div className="login">
        
    <form id="login" onSubmit={submit} >
      <label><b>Name</b></label>
      <input type="text" 
               
               id="Uname" 
               value={name}
               onChange={(e)=>setName(e.target.value)}
               placeholder="Enter a name"/>
      <br></br>
      <label><b>Email</b></label>
      <input type="email" 
               
               id="Uname"
               value={email}
               placeholder="Enter email"
               onChange={(e)=>setEmail(e.target.value)}
               />
      <label><b>Password</b></label>
  
     <input type="password" 
               
               id="Pass" 
               placeholder="Creat a password"
               value={password}
               onChange={(e)=>setPassword(e.target.value)}
               />
      <label><b>Confirm Password</b></label>
   
     <input type="password" 
               
               id="Pass" 
               value={confirmpassword}
               placeholder="Confirm Password"
               onChange={(e)=>setConfirmpasswod(e.target.value)}
               />
     <br></br>

   <input type="submit" className="btn btn-info" value="Register"/>
   
   
    </form>
    </div>
  </body>
    )


}
export default Register;