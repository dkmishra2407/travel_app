const mongoose = require("mongoose")

const userscehema = new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    number:{type:Number,required:true},
    password:{type:String,required:true}
},
{
    timestamps:true
})

const User = mongoose.model("User",userscehema);
module.exports=User;