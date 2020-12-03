
const TransactionModel = require('../models/TransactionModel');
const Transaction = require('../models/TransactionModel')



exports.getTransactions=async(req,res,next)=>{ //mongoose method return promise so async is used
    try{
        const transactions=await Transaction.find();
        return res.status(200).json({
            success:true,
            count:transactions.length,
            transactions:transactions
            
        });

        
    } catch(err){
        return res.status(500).json({ 
            success:false,
            error:'server error'
        });
    }
}
//add transaction
exports.addTransactions=async(req,res,next)=>{
    //res.send('GET transactions')
    //destructre of variable
    try{
        const {text,amount}=req.body;
        const transaction=await Transaction.create(req.body);
    //if transaction is created then respond is send as
        return res.status(201).json({
            success:true,
            transactions:transaction
        })
    }catch(err){
        return res.status(400).json({ 
            success:false,
            error:'all field required'})
    }
    

}


exports.deleteTransactions=async(req,res,nex)=>{
    //res.send('GET transactions')
    try{
        const transaction=await Transaction.findById(req.params.id)

        if(!transaction){
            return res.status(404).json({
                success:false,
                error:'No transaction found'
            })
        }

        await transaction.remove()
        return res.status(200).json({
            sucess:true
        })
    }catch(err){
        return res.status(500).json({
            success:false,
            error:"server error"
        })
    }
}


