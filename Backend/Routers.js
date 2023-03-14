const express =require('express')
const orderModel =require('./DATABASE/dishSchema')
const Router=express.Router();
const emailSender=require('./Email')
require('./DATABASE/dbConnection')

Router.post('/payment',async (req,res)=>{
    const {cname,cemail,TableNum,order,bill,today}=req.body;
  // checking if cart is empty of not
    if(order.length>0)
    {
     try{
            
            const order= orderModel(req.body);
            await order.save()
            // sending email after the order is placed for confirmation
            const info=await emailSender(req.body)
            console.log(info);// just for debugging
            res.send({message:"order is placed"})
        }catch(err){
            res.send({Error:"invalid email address"})
            console.log("error is", err.Error); // debugging
        }
    }
    else{
        res.send({message:"please fill the cart before paying"})
    }
})


Router.get('/',(req,res)=>{
    res.send('Home page')
})


module.exports=Router