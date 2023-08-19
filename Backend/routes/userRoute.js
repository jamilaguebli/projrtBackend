const controller = require("../controllers/usrControlle")
const isAuth = require("../middleware/AuthMiddleware")

const Route=require("express").Router()


Route.get("/get",isAuth,controller.get)
Route.post("/add",isAuth,controller.add)
Route.post("/update",isAuth,controller.update)
Route.post("/delete",isAuth,controller.delete)
Route.post("/me",isAuth,controller.me)
Route.post("/register",controller.register)
Route.post("/login",controller.login)
module.exports=Route