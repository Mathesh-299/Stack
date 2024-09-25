const mongoose = require('mongoose')
const projectSchema = new mongoose.Schema({
    title:
    {
        type: String,
        required: true
    },
    desc:{
        type:String,
        requied:true
    }

})

const projects=mongoose.model("Projects",projectSchema)
module.exports=projects;