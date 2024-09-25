const mongoose=require('mongoose')
mongoose.connect(process.env.MONGOURL || "mongodb+srv://mathesh-299:Mathesh290905@mathesh.3yj4b.mongodb.net/?retryWrites=true&w=majority&appName=Mathesh")

const connection=mongoose.connection;
connection.on('connected',()=>{
    console.log("DB connected")
})

connection.on('error',()=>{
    console.log("Error")
})

module.export=mongoose