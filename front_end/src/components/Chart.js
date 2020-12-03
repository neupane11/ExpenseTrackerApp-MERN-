import React, { useEffect } from 'react'
import  { useContext,useState } from 'react'
import {GlobalContext} from '../context/GlobalState'
import {Bar} from 'react-chartjs-2'




let inc=[];
let exp=[];
const Chart = () => {
    
    const [chartData,setChartData]=useState({})
    
    const {transactions} = useContext(GlobalContext)
    const amounts= transactions.map(transaction=>transaction.amount)
    //console.log(amounts)
    const income=(amounts
        .filter(numb=>numb>0)
        .reduce((total,num)=>(total+=num),0)).toFixed(2)
    inc.push(income)

    const expense=(amounts
        .filter(numb=>numb<0)
        .reduce((total,num)=>(total+=num),0)).toFixed(2)
    exp.push(expense)
    console.log(income)
    const chart=()=>{
        
        
        setChartData({
            labels:['Income','Expense'],
            datasets:[
                {
                    label:'incomeExpense',
                    data:[income,expense],
                    backgroundColor:['rgb(75,192,0.6)'],
                    borderwidth:4
                }
            ]
        })
    };
    
    useEffect(()=>{
        console.log(income)
        chart()
    },[])
    
    
    return (
      <div>
          <Bar data={chartData}/>
      </div>
    )
}
export default Chart;