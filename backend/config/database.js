const mongoose = require('mongoose');
    mongoose.connect(process.env.MONGO_URL)//connects the mongoose from the variable from .env file
    .then(()=>{
        console.log("connected")
    })
    .catch((err)=>{
        console.log(err)
    })
