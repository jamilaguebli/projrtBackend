const express = require('express')
const app = express()
require("dotenv").config()
const port=process.env.Port
const userRoute=require("../Backend/routes/userRoute")
const connect=require("../Backend/helpers/dbConnect")
const cors=require('cors')
const medecinRoute = require('./routes/medecinRoute')
app.use(cors())

app.use(express.json())
app.use("/users",userRoute)
app.use("/medecins",medecinRoute)
connect()

app.listen(port, () => console.log(`Example app listening on port ${port}!`))