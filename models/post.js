const mongoose = require("mongoose");
var schema = new mongoose.Schema({
    imagepath:{type:String,required:true},
    name:{type:String,required:true},
    location:{type:String,required:true},
    date:{type : Date, default: new Date()},
    message:{type:String,required:true},
    likes:{type:Number,default:0}

});
const Post=mongoose.model('post',schema)
module.exports=Post;