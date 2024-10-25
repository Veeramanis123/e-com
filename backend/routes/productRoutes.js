

import express from "express";

// import products from "../Data/products.js";

import Product from "../model/productModel.js";

import asyncHandler from "../middleware/asyncHandler.js"

const routes = express.Router();


routes.get("/",asyncHandler (async(req, res) => {

    const products = await Product.find({});

    // console.log(products)  
    res.json(products);
}))
routes.get("/:id", asyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id);
   
    if( res.json(product)){
        res.json(product)
    }else{
        res.status(404).json({message:"Product Not Found"})
    }
}));

export default routes;