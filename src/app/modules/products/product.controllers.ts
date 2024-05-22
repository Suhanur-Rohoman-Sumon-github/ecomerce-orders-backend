/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { productServices } from './product.services';
import { zodValidationSchema } from './products.validation';
const createProducts = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const products = req.body;

    const zodParsData = zodValidationSchema.parse(products);

    const result = await productServices.createProductsinDb(zodParsData);

    res.status(200).send({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const geAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const query = req.query.searchTerm as string;
    const allData = null as null;

    if (query) {
      const result = await productServices.getAllProductsfromDb(query);
      res.status(200).send({
        success: true,
        message: 'Products fetched successfully!',
        data: result,
      });
    } else {
      const result = await productServices.getAllProductsfromDb(allData);
      res.status(200).send({
        success: true,
        message: 'Products fetched successfully!',
        data: result,
      });
    }
  } catch (error) {
    next(error);
  }
};
const getSingleProducts = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;
    const result = await productServices.getSingleProductsfromDb(id);

    res.status(200).send({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const deleteProducts = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;
    // eslint-disable-next-line no-unused-vars
    const result = await productServices.deleteProductsfromDb(id);

    res.status(200).send({
      success: true,
      message: 'Product deleted successfully!',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};

export const productsControllers = {
  createProducts,
  geAllProducts,
  getSingleProducts,
  deleteProducts,
};
