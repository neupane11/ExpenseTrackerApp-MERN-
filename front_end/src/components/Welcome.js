import React from 'react'
import {Link}from 'react-router-dom'
import Loginoptions from './LoginOptions'

const Welcome=()=>{
    return(
        
        <div style={welcome}>
        
        <h1>Welcome to Expense tracker app</h1>
       <Link to='/'>
            
       </Link>
       <Loginoptions/>
      
    </div>
    )


}
export default Welcome;

const welcome={
    backgroundColor:'lightblue',
    textAlign :'center',
    paddingTop:'400px'

}