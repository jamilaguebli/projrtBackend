const mongoose=require("mongoose")
require("dotenv").config()


const  connect =()=>{
    try{
        mongoose.connect(process.env.MONGOURL)
        console.log("cooncted")
    }catch (error){
                 console.log("erreur")
    }
}
module.exports=connect