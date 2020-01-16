var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// write the API here

// res.json({ name: "Coby Yates" })

app.get('/api/data', (req, res) => {
  res.send({ name: "Coby Yates"})
})

//export app for the tests
module.exports = app;
