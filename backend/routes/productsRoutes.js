const express = require("express");

const productRoutes = (Eggs, Meat) => {
  const productRouter = express.Router();

  productRouter.route("/").get((req, res) => {
    const returnProducts;
    Eggs.find();
return res.json(returnProducts)
  });
productRouter.route("/eggs").get((req, res)=>{
Eggs.find((err, eggs)=>{
  if(err) return res.send(err);
  return res.json(eggs)
})
})
};

module.exports = productRoutes;