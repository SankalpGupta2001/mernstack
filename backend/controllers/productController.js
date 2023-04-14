import asyncHandler from "express-async-handler"
import Product from "../models/productModel.js";
const getProducts = asyncHandler(async(req,res)=>{

      const products    = await Product.find({})
      res.json({products});
});

const getProductById = asyncHandler(async (req, res) => {
      const product = await Product.findById(req.params.id);
    
      if (product) {
        res.json(product)
      } else {
        res.status(404)
        throw new Error('Product not found')
      }
});

const saveProduct = asyncHandler(async(req,res) => {
    
        const newProduct = Product(req.body);
        try{

            const savedProduct = await newProduct.save();
            res.status(200).json(savedProduct);
        }catch(err){
            res.status(500).json(err);
        }
    
});

export {getProducts,getProductById,saveProduct};
