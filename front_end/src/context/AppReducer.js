//specify the state changes according to action 
// type is like add,delete

export default (state,action)=>{
    switch(action.type){
        case 'GET_Transactions':
            return{
                ...state,
                transactions:action.payload
            }
        case 'DELETE':
            return{
                ...state,
                transactions:state.transactions.filter(transaction=>transaction._id !== action.payload)
            } 
        case 'ADD':
            return{
                ...state,
                transactions: [...state.transactions,action.payload,]
            } 
        case 'ERROR':
            return{
                ...state,
                error:action.payload
            }
        default:
            return state
    }
}