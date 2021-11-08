// create API to return list of prods from db at /api/products

import nc from 'next-connect';
import Product from '../../../models/product';
import db from '../../../utils/db';

const handler = nc();
handler.get(async (req, res) => {
  await db.connect();
  const products = await Product.find({});
  await db.disconnect();
  res.send(products);
});
export default handler;
