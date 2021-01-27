var mongoose=require('mongoose')
var Schema=mongoose.Schema
var schema = new Schema({
    imagePath:{type:String,required:true},
    name:{type:String,required:true},
    location:{type:String,required:true},
    date:{type : Date, default: Date.now},
    message:{type:String,required:true},
    likes:{type:Number,required:true,min:0}

});
const Post=mongoose.model('post',schema)
module.exports=Post;