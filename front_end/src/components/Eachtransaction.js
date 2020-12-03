import React from 'react'
import  { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState'

export const Eachtransaction=({transaction})=>{
    const {deleteTransaction} = useContext(GlobalContext)
    const sign= transaction.amount<0?'-':'+'
    return(
    <li className={transaction.amount<0?"list-group-item list-group-item-minus":"list-group-item list-group-item-plus"}>{transaction.text} <span style={{float:"right",color:"red"}}>{Math.abs(transaction.amount)}</span >
                <button onClick={()=>deleteTransaction(transaction._id)} className="deletebtn" >x</button></li>
    )
}
//_id is id comming from database