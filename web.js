# Prueba de comentario

var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var buf = require('buffer');

var st = require('String');

buf = fs.readFileSync('index.html');

st = buf.toString();

app.get('/', function(request, response) {
  response.send(st);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
