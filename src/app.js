const path = require("path");
const express = require("express");

const { title } = require("process");

const app = express();
const hbs = require("hbs");

const publicDirectory = path.join(__dirname, "../public");
const viewsDirectory = path.join(__dirname, "../templates/views");
const partialspath = path.join(__dirname, "../templates/parcels");

const data = require("./util/utility");

console.log(path.join(__dirname, "../templates/parcels"));
app.set("view engine", "hbs");
app.set("views", viewsDirectory);
hbs.registerPartials(partialspath);

app.use(express.static(publicDirectory));

app.get("", (req, res) => {
  res.render("index", {
    title: "MR",
    name: "b",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "MR",
    name: "SEE",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "po",
    name: "bro",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    res.send("need to add address");
  } else {
    data(req.query.address, res);
    // res.send({});
  }
});

app.get("/about/*", (req, res) => {
  res.render("404er", {
    e: "help article not found",
  });
});

app.get("/help/*", (req, res) => {
  res.render("404er", {
    e: "help article not found",
  });
});
app.get("*", (req, res) => {
  res.render("404er", {
    e: "page not found",
  });
});

app.listen(3000, () => {
  console.log("server is up on port 3000.");
});
