const Medecin = require("../models/medecinSchema")


const medecinControlle={

    getMedecin:async(req,res)=>{
      const medecin=await Medecin.find()
     res.status(200).send(medecin)
    
    },

    addMedecin:async(req,res)=>{
        const {image,name,email,speciality,ville}=req.body
    const  newMedecin=await  Medecin.create({image:image,name:name,email:email,speciality:speciality,ville:ville})
      if(!newMedecin)
      res.status(400).json({message:"medecin creation failed"}) 
     res.status(200).json({message:"medecin created successfully "})
},

RechercheMedecin:async(req, res)=>{
    const { ville, speciality } = req.body;
        if (ville=="tous"&&speciality=="tous"){
          const medecin=await Medecin.find()
          res.status(200).send(medecin)

        }
    
        const body = {};
        if (ville) {
          body.ville = { $regex: ville, $options: 'i' };
        }
        if (speciality) {
          body.speciality = { $regex: speciality, $options: 'i' };
        }
    
        const medecins = await Medecin.find(body);
        
      
        if(!medecins)
        res.status(500).json({ message: "An error occurred" });
        res.json(medecins);
      }


}

    

module.exports=medecinControlle