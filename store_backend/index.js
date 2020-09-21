const express=require('express');
const mysql=require('mysql');
const app=express();
const cors=require('cors')
const dotenv=require('dotenv')
dotenv.config();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))


app.get('/',(req,res)=>{
    res.json({message:"hello my sql"})
})

app.use('/api/',require('./route/api'))





app.listen(process.env.PORT,()=>console.log("listening"))
