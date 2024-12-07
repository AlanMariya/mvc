const express=require('express');

const router=express.Router()

const {addProduct,viewProduct,updateProduct,deleteProduct}=require("../controller/productAPI")
//routes
router.post("/",addProduct);
router.get("/",viewProduct);
router.put("/:id",updateProduct);
router.delete("/:id",deleteProduct)

module.exports=router;