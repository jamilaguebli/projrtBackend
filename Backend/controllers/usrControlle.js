const mongoose=require("mongoose")
const User = require("../models/userSchema")
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
require("dotenv").config();

const controller ={
 get:async(req,res)=>{
 const users=await User.find()
 res.send(users)
 },

 add:(req,res)=>{
    User.create(req.body)
    res.send("addd")},

 update:async(req,res)=>{
   await User.findOneAndUpdate({ _id :  req.body._id })
              res.send('user update')
  },
  delete:async(req,res)=>{
   await  User.findOneAndDelete({_id :  req.body._id})
    res.send('user delete')
  },
 
  register:async(req,res)=>{
    console.log(req.body)
   const {email,password,passworConfrim}=req.body
   if(!email||!password||!passworConfrim)
   return res.status(400).json({message:"missed information"})

   const user=await User.findOne({email:email})
   if(user)
   return res.status(400).json({meesage:"alerdy created"})

   if(password.localeCompare(passworConfrim))
   return res.status(400).json({message:"password incorrect"})
   var salt = bcrypt.genSaltSync(10);
   var hash = bcrypt.hashSync(password, salt);
   const newuser= User.create({email:email,password:hash})
   if(!newuser)
   return res.status(400).json({message:"not created"})
   if(newuser)
   return res.status(200).json({_id:newuser._id,token:genToken(newuser._id)})




  },
   login:async(req,res)=>{
        const {email,password}=req.body
        if(!email||!password)
   return res.status(400).json({message:"missed information"})
   const userr=await User.findOne({email})
   if (!userr){
    return res.status(400).json({message:'user does not exist'})
   }
    const isMatch=await bcrypt.compare(password,userr.password)
     if(!isMatch){
      return res.status(400).json({message:'invalid password'})
     }
      res.status(200).json({
        _id:userr._id,
        email:userr.email,
        token:genToken(userr.id)
      })
    


   
  },
  me:async(req,res)=>{
    res.status(200).json(req.user)

  }
  

  
   
}
const genToken =(id)=>{
  return  token = jwt.sign({ _id: id }, process.env.JWT_SECRET,{expiresIn:'10d'});
}
module.exports=controller