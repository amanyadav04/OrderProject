const mongoose=require('mongoose')

const dishSchema=new mongoose.Schema({
    name:String,
    rate:Number,
    rating:Number,
    img:String
})

const orderSchema=new mongoose.Schema({
    cname:String,
    cemail:String,
    TableNum:String,
    order:[],
    bill:Number,
    today:{}
})


const dishModel=mongoose.model('Dish',dishSchema);
const orderModel=mongoose.model('order',orderSchema);


module.exports=dishModel;
module.exports=orderModel;