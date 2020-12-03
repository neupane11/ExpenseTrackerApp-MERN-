import React, { useState } from 'react'
import { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState'
import uuid from 'uuid'
const Addtransaction = () => {
    
    const [text,setText]=useState()
    const [amount,setAmount]=useState()
    const {addTransaction} = useContext(GlobalContext)

    const onSubmit=(e)=>{
        e.preventDefault()
        const newTransaction={
            id:uuid.v4(),
            text,
            amount:parseInt(amount)
        }
        addTransaction(newTransaction)
        
        setAmount({amount: ""})
        
    }
    return (
    <div>
        
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="text"></label>
                Text
                <input type="text" value={text} onChange={(e)=>setText(e.target.value)} className="form-control" placeholder="enter text"></input>

            </div>
            <div className="form-group">
                <label htmlFor="amount"></label>
                Amount<br/>
                <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}className="form-control" placeholder="enter (+) for income, (-) for expense"></input>

            </div>
            <button className="btn btn-info">Add</button>
        </form>
    </div>
    )
}
export default Addtransaction;