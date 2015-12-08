//Express modules
var express = require('express');


//Express Connection
var port = 8080;
var app = express();

app
  .use(express.static(__dirname + '/public'))

//Port verification
app.listen(port, function(){
  console.log("Listening on port: ", port);
});
