
var jwt = require('jsonwebtoken');
const User = require('../models/userSchema');
require("dotenv").config()
const isAuth=async(req,res,next)=>{
    if(!req.headers.authorization && !req.headers.authorization?.startsWith('Bearer')){
        res.status(401).json({message:'token not found'})
    }
    const token=req.headers.authorization.split(' ')[1]
    console.log(token)
    if(!token)
    res.status(401).json({message:'token cant be null'})
    
    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        if(!decoded)
        res.status(401).json({message:'unauthrized'})
       const user= await User.findById({id:decoded._id})
       if(!user)
       res.status(401).json({message:'unauthrized'})

       req.user={
        id:user._id,
        email:user.email

       }
       next()
    } catch (e) {
        throw new Error("error authentification",e.message)
    }

}
module.exports=isAuth