import React from 'react'
import {useState,useContext} from "react";
import UserContext from '../context/UserContext';
import Axios from "axios"
import {useHistory} from "react-router-dom"


const Login=()=>{
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const register=()=>UseHistory.push("/register")
    //enable useContext
    const { setUserData } = useContext(UserContext);
    const UseHistory=useHistory()
    
    const submit=async (e)=>{
        e.preventDefault();
        
        const UserLogin = { email, password};
        const ResponseFromLogin = await Axios.post(
            "http://localhost:5000/users/login",
            UserLogin
        );
        setUserData({
            user: ResponseFromLogin.data.user,
            webtkn: ResponseFromLogin.data.webtkn
            
        });
        localStorage.setItem("auth-token", ResponseFromLogin.data.webtkn);
        

        UseHistory.push("/home");
          
        };
    
    return(
        <body>
        <h2>Login Page</h2>
        <div className="login">
        
        <form id="login" onSubmit={submit}>
            
                <label> <b>Email</b></label>
                
                <input type="email"  className="form-control" id="Uname" placeholder="enter email" onChange={(e)=>setEmail(e.target.value)}></input>
                <br></br>
                <label><b>Password</b></label>
                <input type="password" className="form-control" id="Pass" placeholder="enter password" onChange={(e)=>setPassword(e.target.value)}></input>
                <br></br>
                <input type="submit" id="log" value="Login"/>
                <br>
                </br>
                <h3 style={{color:'white'}}>Register here</h3>
                <button className="btn btn-info" onClick={register}>Register</button>


           
            
        </form>
    </div>
    </body>
    )
    }


export default Login;

