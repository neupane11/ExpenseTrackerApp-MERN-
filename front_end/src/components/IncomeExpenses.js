import React from 'react'
import  { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState'
const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext)
    const amounts= transactions.map(transaction=>transaction.amount)
    
    const income=(amounts
        .filter(numb=>numb>0)
        .reduce((total,num)=>(total+=num),0)).toFixed(2)

    const expense=(amounts
        .filter(numb=>numb<0)
        .reduce((total,num)=>(total+=num),0)).toFixed(2)
    return (
        <div style={{backgroundColor:'lightgrey',display:'flex',borderRadius:'5px',margin:'5px',padding:'5px'}}>
            <div style={{margin:'20px',textAlign:'center',paddingLeft:'50px',color:'green'}}>
                <h4 > Income</h4>
        <p> ${income}</p>
            </div>
            <div style={{margin:'20px',textAlign:'center',paddingLeft:'50px',color:'red'}}>
                <h4>Expenses</h4>
        <p>${expense}</p>
            </div>
        </div>
    )
}
export default IncomeExpenses;