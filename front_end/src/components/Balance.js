import React from 'react'
import  { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState'

const Balance = () => {
    const {transactions} = useContext(GlobalContext)
    const amounts= transactions.map(transaction=>transaction.amount)
    const totalAmount=amounts.reduce((total,num)=>(total+=num),0).toFixed(2)
    return (
        <div style={{fontFamily:'fantasy',backgroundColor:'lightgreen',padding:'5px',borderRadius:'5px',textAlign:'center',margin:'5px',position:'relat'}}>
            <h4>Current Balance</h4>
        <h2>${totalAmount}</h2>
        </div>
    )
}
export default Balance;

