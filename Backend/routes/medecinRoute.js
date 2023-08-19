const medecinControlle = require("../controllers/medecinControlle")

const Router=require("express").Router()

Router.get('/getMedecin',medecinControlle.getMedecin)
Router.post('/addMedecin',medecinControlle.addMedecin)
Router.post('/RechercheMedecin',medecinControlle.RechercheMedecin)
module.exports=Router
