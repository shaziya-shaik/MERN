const mongoose=require('mongoose')

const alienSchema=new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    tech:{
        type:String,
        required: true
    },
    subScription:{
        type: Boolean,
        required: true,
        default:false
    }
})

module.exports=mongoose.model('Alien',alienSchema)