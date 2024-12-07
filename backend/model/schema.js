const mongoose = require('mongoose');
var ProductSchema = mongoose.Schema({
    Product:String,
    category:String,
    count:Number,
    description:String 
});
var ProductModel = mongoose.model("schema",ProductSchema)

module.exports = ProductModel