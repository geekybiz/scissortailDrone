//Express modules
var compress = require('compression');
var express = require('express');



//Express Connection
var port = process.env.PORT;
var app = express();


app.use(compress());
app.use(express.static(__dirname + '/public'))

//Port verification

app.listen(port, function(){
  console.log("Listening on port: ", port);
});
