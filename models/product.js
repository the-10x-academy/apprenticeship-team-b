var mongoose=require('mongoose')
var Schema=mongoose.Schema
var schema = new Schema({
    imagePath:{type:String,required:true},
    name:{type:String,required:true},
    location:{type:String,required:true},
    date:{type:String,required:true},
    message:{type:String,required:true},

});
const Post=mongoose.model('post',schema)
module.exports=Post;