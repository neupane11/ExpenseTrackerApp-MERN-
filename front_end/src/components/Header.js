import React from 'react'

const Header = () => {
    return (
        <div style={header}>
        <h1 >
        Expense-Tracker   
        </h1>
        </div>
    )
}
export default Header;

const header={
    flex:'10',
    color:'black',
    textAlign:'center',
    backgroundColor:'grey'
}