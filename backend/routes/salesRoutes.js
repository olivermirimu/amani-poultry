const express = require("express");

const salesRoutes = (Item) => {
  const salesRouter = express.Router();

  salesRouter
    .route("/")
    .post((req, res) => {
      const _item = new Item(req.body);
      _item.save().catch((err) => res.send(`An Error occured: ${err}`));
      return res.json(_item);
    })
    .get((req, res) => {
      Item.find()
        .then((_data) => {
          let chicks = {
            records: _data.filter((_item) => _item.name === "chicks"),
            total: _data
              .filter((_item) => _item.name === "chicks")
              .reduce((totalSales, _item) => totalSales + _item.total, 0),
          };
          let cocks = {
            records: _data.filter((_item) => _item.name === "cocks"),
            total: _data
              .filter((_item) => _item.name === "cocks")
              .reduce((totalSales, _item) => totalSales + _item.total, 0),
          };
          let hens = {
            records: _data.filter((_item) => _item.name === "hens"),
            total: _data
              .filter((_item) => _item.name === "hens")
              .reduce((totalSales, _item) => totalSales + _item.total, 0),
          };
          let meat = {
            records: _data.filter((_item) => _item.name === "meat"),
            total: _data
              .filter((_item) => _item.name === "meat")
              .reduce((totalSales, _item) => totalSales + _item.total, 0),
          };
          let eggs = {
            records: _data.filter((_item) => _item.name === "eggs"),
            total: _data
              .filter((_item) => _item.name === "eggs")
              .reduce((totalSales, _item) => totalSales + _item.total, 0),
          };
          let total = _data.reduce(
            (totalSales, _item) => totalSales + _item.total,
            0
          );
          return res.json({ chicks, cocks, hens, meat, eggs, total });
        })
        .catch((err) => res.send(`An Error occured: ${err}`));
    })
    .put((req, res) => {
      Item.findOneAndUpdate({ _id: req.body.id }, req.body.record)
        .then((_record) => res.json(_record))
        .catch((err) => res.send(err));
    })
    .delete((req, res) => {
      Item.findOneAndDelete({ _id: req.body.id })
        .then((_record) => res.json(_record))
        .catch((err) => res.send(err));
    });
  return salesRouter;
};

module.exports = salesRoutes;
