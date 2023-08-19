const mongoose=require("mongoose")


const medecinSchema=mongoose.Schema({
  image:String,
  name:String,
  email:{type:String,unique:true},
  speciality:String,
  ville:String
} )

const Medecin=mongoose.model("medecins",medecinSchema)
module.exports=Medecin