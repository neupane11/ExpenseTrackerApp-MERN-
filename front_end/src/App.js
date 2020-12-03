import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactioList from './components/TransactionList'
import Addtransaction from './components/Addtransaction'
//import Chart from './components/Chart'
import GlobalProvider from './context/GlobalState'
import Login from './components/Login';
import Register from './components/Register'
import Welcome from './components/Welcome'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import UserContext from "./context/UserContext"
import Axios from "axios";

import Logout from './components/Logout';
import PrivateRoute from './RouterAuth/PrivateRoute';


function App() {
  const [userData,setUserData]=useState({
    webtkn:undefined,
    user:undefined,
  });

  useEffect(()=>{
    const checkLoggedIn=async ()=>{
      let webtkn=localStorage.getItem("auth-token")
      if (webtkn===null){
        localStorage.setItem("auth-token","")
        webtkn=""
      }
      const GetToken=await Axios.post("http://localhost:5000/users/IsTokenValid?",null,{headers:{"x-auth-token":webtkn}})
      //console.log(GetToken.data)
      if(GetToken.data){
        const resToUser=await Axios.get("http://localhost:5000/users/",{headers:{"x-auth-token":webtkn}})
        setUserData({
          webtkn,
          user:resToUser.data
        })
      }
    }
    checkLoggedIn()
  },[])
  return (
    <Router>
      <UserContext.Provider value={{userData,setUserData}}>
        <Switch>
          <Route path="/" exact component={Welcome}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <PrivateRoute exact path="/home" component={Home} />
          </Switch>
      </UserContext.Provider>
    </Router>
   
  );
}
const Home=()=>(
   
  <GlobalProvider>
    <Header/>
    <Logout/>
    <div class="container">
      <Balance/>
      <IncomeExpenses/>
      <TransactioList/>
      <Addtransaction/>
      
    </div>
  </GlobalProvider>
)

export default App;
