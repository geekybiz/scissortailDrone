//Express modules
var compress = require('compression');
var express = require('express');



//Express Connection
var port = process.env.PORT;
var app = express();
app.use(compress());


app.use(require('prerender-node').set('prerenderToken', 'PCayKoAiRyC2eJaFeVNA'));
app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res){
  res.sendFile('./public/index.html');
});

//Port verification
var listener = app.listen(port, function(){
  console.log("Listening on port: " + listener.address().port);
});
