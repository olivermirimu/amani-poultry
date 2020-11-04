const path = require("path");
const express = require("express");
const nodemon = require("nodemon");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();
const port = process.env.PORT || 3200;

// routes
const productRoutes = require("./routes/productsRoutes");
const chickenRoutes = require("./routes/chickenRoutes");

app.use(morgan(tiny));
app.use(bodyParser);

app.get("/", (req, res) => {
  res.send("index.html");
});
app.listen(port, () => {
  console.log(`app listening on ${port}`);
});
