const mongoose = require("mongoose");
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
var month = "";
if(mm == 1){
month = "Jan";
}else if(mm == 2){
month = "Feb";
}else if(mm == 3){
month = "Mar";
}else if(mm == 4){
month = "Apr";
}else if(mm == 5){
month = "May";
}else if(mm == 6){
month = "Jun";
}else if(mm == 7){
month = "Jul";
}else if(mm == 8){
month = "Aug";
}else if(mm == 9){
month = "Sep";
}else if(mm == 10){
month = "Oct";
}else if(mm == 11){
month = "Nov";
}else if(mm == 12){
month = "Dec";
}

var date = String(dd) + " " + month + " " + String(yyyy);
var schema = new mongoose.Schema({
    imagepath:{type:String,required:true},
    name:{type:String,required:true},
    location:{type:String,required:true},
    date:{type : Date, default: date},
    message:{type:String,required:true},
    likes:{type:Number,default:0}

});
const Post=mongoose.model('post',schema)
module.exports=Post;