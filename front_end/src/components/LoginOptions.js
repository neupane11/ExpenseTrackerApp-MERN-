import React, { useContext } from 'react'
import {useHistory} from "react-router-dom"
import UserContext from '../context/UserContext'


export default  function LoginOptions(){
    const {userData,setUserData}=useContext(UserContext)

    const history=useHistory()
    const register=()=>history.push("/register")
    const login=()=>history.push("/login")
    //for logout set the webtkn empty 
    const logout=()=>{
        setUserData({
            webtkn:undefined,
            user:undefined
        })
        localStorage.setItem("auth-token","")
        
    }
    return (
        //handle logout conditionally using ternary operator
        
        <div>
            {userData.user?(<button onClick={logout}>logout</button>):(
            <>
            <button className="btn btn-success" onClick={login}>Login</button>
            <button className="btn btn-info" onClick={register}>Register</button>
            </>
           )}
        </div>
    )
}