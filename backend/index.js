//importing 
const express = require('express')
const dotenv = require("dotenv")
 const Productroutes=require("./routes/productRoutes")

//initialize
const app = express()
dotenv.config()
require("./config/database") //import after initialize

//add middleware
app.use(express.json());

//useroutes
app.use("/api/products",Productroutes)

//api creation

//port setting
const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`server port is running ${PORT}`);
});