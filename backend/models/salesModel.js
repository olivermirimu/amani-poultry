const mongoose = require("mongoose");
const { Schema } = mongoose;

const salesModel = new Schema({
  date: { type: Date },
  name: { type: String },
  details: { type: String },
  unitCost: { type: Number },
  total: { type: Number },
});

module.exports = mongoose.model("Sales", salesModel);
