import React, { useContext,useEffect } from 'react'
import {GlobalContext} from '../context/GlobalState'
import { Eachtransaction } from './Eachtransaction'

const TransactionList = () => {
    const {transactions,getTransactions} = useContext(GlobalContext)
    useEffect(()=>{
        getTransactions()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    return (
        <div>
            <h3>History</h3>
            <ul className="list-group">
                {transactions.map(transaction=>( <Eachtransaction key={transaction.id} transaction={transaction}/>
                ))}
               
            </ul>
        </div>
    )
    
}
export default TransactionList;
