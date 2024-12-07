//import
const Product = require("../model/schema")

//api to add
const addProduct = async (req, res) => {
try {
    await Product(req.body).save()
    res.send({message:"data added"})
} catch (error) {
   console.log(error); 
}
}

const viewProduct = async (req,res)=>{
    try {
        const data = await Product.find()
        res.send(data)
    } catch (error) {
        console.log(error)
    }
}

const updateProduct= async(req,res)=>{
    try {
        const data =await Product.findByIdAndUpdate(req.params.id,req.body)
        res.send({message:"data updated",data});
    } catch (error) {
       console.log(error)
    }
}
const deleteProduct= async(req,res)=>{
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.send("data deleted")
    } catch (error) {
        console.log(error)
    }
}

module.exports={addProduct,viewProduct,updateProduct,deleteProduct}//export
