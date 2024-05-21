import { Tproducts } from "./product.interface";
import ProductModel from "./product.models";

const createProductsinDb = (products:Tproducts)=>{
    const result = ProductModel.create(products)
    return result
}

export const productServices = {
    createProductsinDb
}