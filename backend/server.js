const path = require("path");
const express = require("express");
const nodemon = require("nodemon");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

// variable declarations
const app = express();
const { Eggs, Meat } = require("./models/productModels");
const { Chicks, Cock, Hen } = require("./models/chickenModels");
const sales = require("./models/salesModel");
const supplies = require("./models/supplies");
const port = process.env.PORT || 3200;
const MONGODB_URI = "mongodb://localhost/amaniPoultry";
// routes
const productRoutes = require("./routes/productsRoutes")(Eggs, Meat);
const chickenRoutes = require("./routes/chickenRoutes")(Cock, Chicks, Hen);
const salesRoutes = require("./routes/salesRoutes")(sales);
const suppliesRoutes = require("./routes/suppliesRoutes")(supplies);

// database connection
const db = mongoose.connect(
  MONGODB_URI,
  { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false },
  (err) => {
    err
      ? console.log(`An error occured ${err.message}`)
      : console.log("DB Suuccessfully connected");
  }
);
mongoose.connection;

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname)));
app.use("/api/products", productRoutes);
app.use("/api/chicken", chickenRoutes);
app.use("/api/sales", salesRoutes);
app.use("/api/supplies", suppliesRoutes);

app.get("/", (req, res) => {
  res.sendFile("index.html");
});
app.listen(port, () => {
  console.log(`app listening on ${port}`);
});
