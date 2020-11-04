const express = require("express");
const path = require("path");

const app = express();
const port = 3000;
const poultryRouter = express.Router();

app.use("/", poultryRouter);
app.use(express.static(path.join(__dirname, "src")));
app.use(express.static(path.join(__dirname, "assets")));

// route declarations
poultryRouter.route("/dashboard").get((req, res) => {
  // res.sendFile("dashboard.html");
  res.sendFile("dashboard.html");
  // res.send("kuku");
});
poultryRouter.route("/login").get((req, res) => {
  res.sendFile("login.html");
});

app.get("/", (req, res) => {
  res.sendFile("index.html");
});
app.listen(port, function (req, res) {
  console.log("Hello");
});
