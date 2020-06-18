//import products from '../../static/products.json';

import Product from '../../models/Product';
import connectDb from '../../utils/connectDb';

connectDb();

export default async (req, res) =>{
  const { page, size } = req.query;
  // Convert qyery String value to numbers
  const pageNum = Number(page);
  const pageSize = Number(size);
  let products = [];
  if(pageNum === 1){
    products = await Product.find().limit(pageSize);
  }

  //const Products = await Product.find();
  res.status(200).json(Products);
}