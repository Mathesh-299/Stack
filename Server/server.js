require('dotenv').config()
const express=require('express')
const app=express()
const DBcon=require('./config/db')
const projects=require("./routes/ProjectRoutes")
const Users=require("./routes/UserRouters")
app.use(express.json())
// app.use(cors())
const port=process.env.PORT || 7778
app.use('/projects', projects)
app.use('/users',Users)

app.get('/',(req,res)=>{
    res.json({message:"welcome"})
})

app.listen(port,()=>{
    console.log(`sever is running in ${port}`)
})
