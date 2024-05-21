import { Request, Response } from "express";
import { productServices } from "./product.services";

const createProducts = async (req:Request,res:Response)=>{
   try {
    const products = req.body
    
   const result = await productServices.createProductsinDb(products)
   
   res.status(200).send({
    success:true,
    message:"Product created successfully!",
    data:result
   })
   } catch (error) {
    console.log(error);
   }
}

export const productsControllers = {
    createProducts
}