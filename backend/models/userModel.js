const mongoose = require("mongoose");
const { Schema } = mongoose;

const userModel = new Schema({
  email: { type: String },
  username: { type: String },
  role: { type: String },
  password: { type: String },
});

module.exports = mongoose.model("User", userModel);
