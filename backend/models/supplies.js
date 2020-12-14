const mongoose = require("mongoose");
const { Schema } = mongoose;

const suppliesModel = new Schema({
  date: { type: Date },
  category: { type: String },
  details: { type: String },
  unitCost: { type: Number },
  total: { type: Number },
});

module.exports = mongoose.model("Supplies", suppliesModel);
