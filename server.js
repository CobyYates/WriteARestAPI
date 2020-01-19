const app = require("./app");
var port = 8888;

//spin up our app
app.listen(port, function(err){
  if(err){
      console.log(err);
  }
  console.log('Magic is happening on port ' + port);
});