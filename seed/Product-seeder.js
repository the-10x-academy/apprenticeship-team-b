var Product=require('../models/product')
var mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/teamb', {useNewUrlParser: true, useUnifiedTopology: true});
var posts = [
    new Product({
        name:'jasmeeth',
        location:'hyderabad',
        imagePath:'C:\Users\lenovo\Desktop\images\bikes.jpg',
        date:new Date() ,
        message:'bike..'}),
    new Product({
        name:'hemanth',
        location:'chennai',
        imagePath:'C:\Users\lenovo\Desktop\images\bikes1.jpg',
        date:new Date() ,
        message:'bikes '
    }),
    new Product({
        name:'vaishnavi',
        location:'nellore',
        imagePath:'C:\Users\lenovo\Desktop\images\car.jpg',
        date:new Date() ,
        message:'first car'
    }),
    new Product({
        name:'leenesh',
        location:'madhya pradesh',
        imagePath:'C:\Users\lenovo\Desktop\images\dog.jpg',
        date:new Date() ,
        message:'vacation time'
    }),
    new Product({
        name:'vinthai',
        location:'tamil nadu',
        imagePath:'C:\Users\lenovo\Desktop\images\car1.jpg',
        date:new Date() ,
        message:'car...'
    }),
    new Product({
        name:'vineeth',
        location:'hyderabad',
        imagePath:'C:\Users\lenovo\Desktop\images\car1.jpg',
        date:new Date() ,
        message:'car...'
    })
]
var done=0
for (var i=0;i<posts.length;i++){
    posts[i].save(function(err,result){
        if (err){
            console.log(err);
            return 
        }
        
        if (done==posts.length){
            exit1();
        }
    })
}
function exit1(){
    mongoose.disconnect();
}
