var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// write the API here

app.get('/api/data', (req, res) => {
  res.send({ name: "Coby Yates"})
})

app.post('/api/data', (req, res) => {
    res.send('test')
    console.log('test sent')
})

app.get('/api', (req, res) => {
    res.send('<h2>You have reached the api</h2>')
  })

//export app for the tests
module.exports = app;
