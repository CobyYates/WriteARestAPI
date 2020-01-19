var express = require("express");
var app = express();
var bodyParser = require("body-parser");

const querystring = require("querystring");

app.use(express.json())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// write the API here

app.get("/api", (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  let myObj = {
    name: "Coby",
    job: "Ninja"
  };
  res.end(JSON.stringify(myObj));
});

app.get("/api/data", (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  let myObj = {
    make: "Lamborghini",
    model: "Aventador"
  };
  res.end(JSON.stringify(myObj));
});

app.post("/api/data", (req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    let myObj = {
      make: "Lamborghini",
      model: "Aventador"
    };
    res.end(JSON.stringify(myObj));
  });

//export app for the tests
module.exports = app;
