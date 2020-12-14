const { json } = require("body-parser");
const express = require("express");

const productRoutes = (Eggs, Meat) => {
  const productRouter = express.Router();

  productRouter.route("/all").get((req, res) => {
    let returnValue = {};
    Eggs.find()
      .then((_eggs) => {
        returnValue = { ...returnValue, Eggs: _eggs };
      })
      .catch((err) => res.send(`An error occured: ${err}`));
    Meat.find()
      // .then((_meat) => (meat = _meat))
      // .then((_meat) => console.log(_meat))
      .catch((err) => res.send(`An error occured: ${err}`));
    // console.log({ Eggs: eggs, Meat: meat });
    // console.log("eggs", eggs);
    console.log(returnValue);
    return res.json(returnValue);
  });
  productRouter
    .route("/eggs")
    .get((req, res) => {
      Eggs.find()
        .then((eggs) => res.json(eggs))
        .catch((err) => res.send(`An error occured: ${err}`));
    })
    .post((req, res) => {
      const eggs = new Eggs(req.body);
      eggs.save().catch((err) => res.send(`An error occured: ${err}`));
      return res.json(eggs);
    })
    .put((req, res) => {
      Eggs.findOneAndUpdate({ _id: req.body.id }, req.body.record)
        .then((_record) => res.json(_record))
        .catch((err) => res.send(err));
    })
    .delete((req, res) => {
      Eggs.findOneAndDelete({ _id: req.body.id })
        .then((_record) => res.json(_record))
        .catch((err) => res.send(err));
    });
  productRouter
    .route("/meat")
    .get((req, res) => {
      Meat.find()
        .then((_meat) => res.json(_meat))
        .catch((err) => res.send(`An error occured: ${err}`));
    })
    .post((req, res) => {
      const meat = new Meat(req.body);
      meat
        .save()
        .catch((err) => res.send(`An error occured while saving: ${err}`));
      return res.json(meat);
    })
    .put((req, res) => {
      Meat.findOneAndUpdate({ _id: req.body.id }, req.body.record)
        .then((_record) => res.json(_record))
        .catch((err) => res.send(err));
    })
    .delete((req, res) => {
      Meat.findOneAndDelete({ _id: req.body.id })
        .then((_record) => res.json(_record))
        .catch((err) => res.send(err));
    });
  return productRouter;
};

module.exports = productRoutes;
