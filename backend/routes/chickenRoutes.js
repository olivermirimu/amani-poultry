const express = require("express");

const chickenRoutes = (Cock, Chicks, Hen) => {
  const chickenRouter = express.Router();

  chickenRouter.route("/all").get((req, res) => {
    return res.json();
  });
  chickenRouter
    .route("/cocks")
    .get((req, res) => {
      Cock.find()
        .then((cocks) => res.json(cocks))
        .catch((err) => res.send(`An Error occured: ${err}`));
    })
    .post((req, res) => {
      const newCock = new Cock(req.body);
      newCock.save().catch((err) => res.send(`An Error occured: ${err}`));
      return res.json(newCock);
    })
    .put((req, res) => {
      Cock.findOneAndUpdate({ _id: req.body.id }, req.body.record)
        .then((_record) => res.send(_record))
        .catch((err) => res.send(`Sorry an error occured: ${err}`));
    })
    .delete((req, res) => {
      Cock.findOneAndDelete({ _id: req.body.id })
        .then((_record) => res.json(_record))
        .catch((err) => res.send(err));
    });
  chickenRouter
    .route("/hens")
    .get((req, res) => {
      Hen.find()
        .then((_hens) => res.json(_hens))
        .catch((err) => res.send(`An Error occured: ${err}`));
    })
    .post((req, res) => {
      const hen = new Hen(req.body);
      hen.save().catch((err) => res.send(`An Error occured: ${err}`));
      return res.json(hen);
    })
    .put((req, res) => {
      Hen.findOneAndUpdate({ _id: req.body.id }, req.body.record)
        .then((_record) => res.json(_record))
        .catch((err) => res.send(`An error occured: ${err}`));
    })
    .delete((req, res) => {
      Hen.findOneAndDelete({ _id: req.body.id })
        .then((_record) => res.json(_record))
        .catch((err) => res.send(err));
    });
  chickenRouter
    .route("/chicks")
    .get((req, res) => {
      Chicks.find()
        .then((_chicks) => res.json(_chicks))
        .catch((err) => res.send(`An Error occured: ${err}`));
    })
    .post((req, res) => {
      const chick = new Chicks(req.body);
      chick.save().catch((err) => res.send(`An Error occured: ${err}`));
      return res.json(chick);
    })
    .put((req, res) => {
      Chicks.findOneAndUpdate({ _id: req.body.id }, req.body.record)
        .then((_record) => res.send(_record))
        .catch((err) => res.send(`Sorry an error occured: ${err}`));
    })
    .delete((req, res) => {
      Chicks.findOneAndDelete({ _id: req.body.id })
        .then((_record) => res.json(_record))
        .catch((err) => res.send(err));
    });
  return chickenRouter;
};

module.exports = chickenRoutes;
