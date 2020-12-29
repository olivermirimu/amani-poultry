const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const morgan = require("morgan");
const passport = require("passport");

const app = express();
const port = process.env.PORT || 3000;
const {
  Eggs,
  Meat
} = require("../backend/models/productModels");
const {
  Chicks,
  Cock,
  Hen
} = require("../backend/models/chickenModels");
const sales = require("../backend/models/salesModel");
const supplies = require("../backend/models/supplies");
const MONGODB_URI = "mongodb+srv://Nico:nicoamanipoultry@amani-poultry.kigg6.mongodb.net/Amani-Poultry?retryWrites=true&w=majority";
// const MONGODB_URI = "mongodb://localhost/amaniPoultry";

// routes
const poultryRouter = express.Router();
/*** API ROUTES ***/
const productRoutes = require("../backend/routes/productsRoutes")(Eggs, Meat);
const chickenRoutes = require("../backend/routes/chickenRoutes")(
  Cock,
  Chicks,
  Hen
);
const salesRoutes = require("../backend/routes/salesRoutes")(sales);
const suppliesRoutes = require("../backend/routes/suppliesRoutes")(supplies);
const authRoutes = require("../backend/routes/authRoutes")();
const initializePassport = require("../backend/passport-config");

// database connection
const db = mongoose.connect(
  MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
  },
  (err) => {
    err
      ?
      console.log(`An error occured ${err.message}`) :
      console.log("DB Suuccessfully connected");
  }
);
mongoose.connection;

// passport initialize
app.use(passport.initialize());
initializePassport(passport);

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname)));
app.use("/api/products", productRoutes);
app.use("/api/chicken", chickenRoutes);
app.use("/api/sales", salesRoutes);
app.use("/api/supplies", suppliesRoutes);
app.use("/auth", authRoutes);
app.use("/", poultryRouter);
app.use(
  "/scripts/js",
  express.static(path.join(__dirname, "../node_modules/apexcharts/dist"))
);
app.use(express.static(path.join(__dirname, "src")));
app.use(express.static(path.join(__dirname, "assets")));

// route guard
app.use("/*", (req, res, next) => {
  next();
});

// route declarations
const routeOptions = {
  root: path.join(__dirname, "src")
};
poultryRouter.route("/dashboard").get((req, res) => {
  res.sendFile("dashboard.html", routeOptions);
});
poultryRouter.route("/animal-section").get((req, res) => {
  res.sendFile("animalSection.html", routeOptions);
});
poultryRouter.route("/eggs").get((req, res) => {
  res.sendFile("eggs.html", routeOptions);
});
poultryRouter.route("/meat").get((req, res) => {
  res.sendFile("meat.html", routeOptions);
});
poultryRouter.route("/sales").get((req, res) => {
  res.sendFile("sales.html", routeOptions);
});
poultryRouter.route("/supplies").get((req, res) => {
  res.sendFile("supplies.html", routeOptions);
});
poultryRouter.route("/accounts").get((req, res) => {
  res.sendFile("accounts.html", routeOptions);
});
poultryRouter.route("/signup").get((req, res) => {
  res.sendFile("register.html", routeOptions);
});
poultryRouter.route("/login").get((req, res) => {
  res.sendFile("login.html", routeOptions);
});

app.get("/", (req, res) => {
  res.sendFile("index.html");
});
app.get("/api", (req, res) => {
  res.sendFile("index.html", {
    root: path.join(__dirname, "../backend")
  });
});
app.listen(port, function (req, res) {
  console.log("Hello");
});