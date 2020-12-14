const mongoose = require("mongoose");
const { Schema } = mongoose;

const chickModel = new Schema({
  date: { type: Date },
  breed: { type: String },
  population: { type: Number },
});

const henModel = new Schema({
  date: { type: Date },
  breed: { type: String },
  population: { type: Number },
});

const cockModel = new Schema({
  date: { type: Date },
  breed: { type: String },
  population: { type: Number },
});

module.exports = {
  Chicks: mongoose.model("Chicks", chickModel),
  Hen: mongoose.model("Hens", henModel),
  Cock: mongoose.model("Cock", cockModel),
};
