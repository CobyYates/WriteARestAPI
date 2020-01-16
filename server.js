const app = require("./app");
var port = 8888;

//spin up our app
app.listen(port, function(err){
  //check to see if there is an err
  if(err){
      //if there is, log it
      console.log(err);
  }
  //otherwise tell us that it is running
  console.log('Magic is happening on port ' + port);

});

app.get('/', (req, res) => {
  res.send('<h1>Welcome to my humble abode</h1>')
})

app.get('/api', (req, res) => {
  res.send('<h2>You have reached the api</h2>')
})

app.post('/api/data', (req, res) => {
  res.send('test')
  console.log('test sent')
})