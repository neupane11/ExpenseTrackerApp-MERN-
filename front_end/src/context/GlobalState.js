
import React , {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'
//initail state
const initialState= {
 transactions:   [
        //{id: 1, text: 'laptop', amount: 400},
        //{id: 2, text: 'laptop', amount: -400},
        //{id: 3, text: 'laptop', amount: 400},
        //{id: 4, text: 'laptop', amount: 400}

    ]

}
//creating context
 export const GlobalContext=createContext(initialState)

//provider component
//used for wrappoing all other component
//provider provides state to components which it wraps around
//children are all components

 const GLobalProvider= ({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //Actions 
    //Actions are brought down from reducer
    //getTransaction brings the data from backend
    //payload for this function is the data from backend
    async function getTransactions(){
        try{
            const response=await axios.get('/api/transactions')
            
            dispatch({
                type:'GET_Transactions',
                payload:response.data.transactions
            })
        }catch(err){
            dispatch({
                type:'ERROR',
                payload:"enter text and amount"
            })
        }
    }
    async function deleteTransaction(id){
        try{
            await axios.delete(`./api/transactions/${id}`)
            dispatch({
                type:'DELETE',
                payload:id
            })
        }catch(err){
        dispatch({
            type:'ERROR',
            payload:"error in deleting"
        })
            
        }
        
    }
    //we need content type while sending data
    async function addTransaction(transaction){
        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }
        try{
            const response=await axios.post('/api/transactions',transaction,config)

            dispatch({
                type:'ADD',
                //payload:transaction
                payload:response.data.transactions//these are data from backend
            })
        }catch(err){
            dispatch({
                type:'ERROR',
                payload:'error in adding'
            })
        }
        
    }
return (<GlobalContext.Provider value={{transactions:state.transactions,
        deleteTransaction,addTransaction,getTransactions
        }}>
        {children}
    </GlobalContext.Provider>)
}
export default GLobalProvider  
