const express =require('express')
const dotenv=require('dotenv')
const path=require('path')

const connectToDB=require('./config/db')
//userdb
//const connectToUserDB=require('./config/userdb')

dotenv.config({path: './config/config.env'});

connectToDB()
//connectToUserDB()
//routers
const transactions=require('./routes/transactions')
//const user=require('./routes/users')


const app=express();
//when data is posted it comes in as req.body.text or amount ,so to be able to use that we nedd middleware called bodyparser
app.use(express.json())



//app.use('/user/register',user)
app.use('/api/transactions',transactions)

//for deployement
if(process.env.Node_env=='production'){
    app.use(express.static('front_end/build'))

    app.get('*',(req,res)=> {
    res.sendFile(path.resolve(__dirname,'front_end','build','index.html'))});
}
const PORT=process.env.PORT || 8000
app.listen(PORT,console.log(`Server running on port ${PORT}`))