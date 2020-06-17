//import products from '../../static/products.json';

import Product from '../../models/Product';
import connectDb from '../../utils/connectDb';

connectDb();

export default async (req, res) =>{
  const Products = await Product.find();
  res.status(200).json(Products);
}