var express = require('express');
var kle = require('@ijprest/kle-serial');

var app = express();

app.use(express.json());

app.post('/', function(request, response){
  console.log("Handling parsing request");
  response.send(kle.Serial.deserialize(request.body));
});

app.listen(3000);
