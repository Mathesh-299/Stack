require('dotenv').config();
const express=require('express')
const app=express()
const DBcon=require('./config/db')
const projects=require('./models/ProjectModel')
const users=require('./models/UserModel')
const router=require('./routes/ProjectRoutes')
app.use(express.json())
const port=process.env.PORT || 7778
app.use('/projects', router)
app.get('/',(req,res)=>{
    res.json({message:"welcome"})
})

app.listen(port,()=>{
    console.log(`sever is running in ${port}`)
})
