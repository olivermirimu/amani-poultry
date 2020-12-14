const mongoose = require("mongoose");
const { Schema } = mongoose;

const eggModels = new Schema({
  date: { type: Date },
  quantity: { type: Number },
});

const meatModel = new Schema({
  date: { type: Date },
  quantity: { type: Number },
});

module.exports = {
  Eggs: mongoose.model("Eggs", eggModels),
  Meat: mongoose.model("Meat", meatModel),
};
