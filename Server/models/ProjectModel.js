const mongoose = require('mongoose')
const projectSchema = new mongoose.Schema({
    title:
    {
        type: String,
        required: true
    },
    desc:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    },
    cover:{
        type:String,
        required:true
    },
    git:{
        type:String,
        required:true
    }
})

const projects=mongoose.model("Projects",projectSchema)
module.exports=projects;