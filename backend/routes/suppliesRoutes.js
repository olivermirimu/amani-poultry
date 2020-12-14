const express = require("express");

const salesRoutes = (Item) => {
  const salesRouter = express.Router();

  salesRouter
    .route("/")
    .get((req, res) => {
      Item.find()
        .then((_data) => {
          let equipment = {
            records: _data.filter((_item) => _item.category === "equipment"),
            total: _data
              .filter((_item) => _item.category === "equipment")
              .reduce((suppliesTotal, _item) => suppliesTotal + _item.total, 0),
          };
          let medication = {
            records: _data.filter((_item) => _item.category === "medication"),
            total: _data
              .filter((_item) => _item.category === "medication")
              .reduce((suppliesTotal, _item) => suppliesTotal + _item.total, 0),
          };
          let food = {
            records: _data.filter((_item) => _item.category === "food"),
            total: _data
              .filter((_item) => _item.category === "food")
              .reduce((suppliesTotal, _item) => suppliesTotal + _item.total, 0),
          };
          let total = _data.reduce(
            (suppliesTotal, _item) => suppliesTotal + _item.total,
            0
          );

          return res.json({ equipment, medication, food, total });
        })
        .catch((err) => res.send(`An Error occured: ${err}`));
    })
    .post((req, res) => {
      let newItem = new Item(req.body);

      newItem.save().catch((err) => res.send(`An Error occured: ${err}`));
      return res.json(newItem);
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
