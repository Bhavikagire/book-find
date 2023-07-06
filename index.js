const express = require("express")
require('dotenv').config()
const cors = require("cors")
const mongoose = require("mongoose")
const bookRouter = require("./routers/book")
const port = process.env.port
const app = express()
app.use(express.json())
app.use(cors())

app.use("/books", bookRouter)

 mongoose.connect(process.env.mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

.then(()=>{
    console.log("connected db")
  
})
.catch((error)=> console.log("mongo error"))

app.listen(port,()=>{
    console.log("server is running at", port)
})