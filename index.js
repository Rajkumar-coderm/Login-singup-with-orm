const express=require('express');
const app=express();
const port=process.env.db_port||2023
const morgan=require('morgan')
require('dotenv').config()
const user=require('./routs/router')
app.use(express.json());
app.use('/new',user)





app.listen(port,()=>{
    console.log(`connected port ${port}`);
})