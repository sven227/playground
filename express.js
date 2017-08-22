var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
//http GET verb:
app.get('/', function (req, res) {
    res.send('<html> <head></head> <body><h1> Hello World!</h1></body></html>');
});

app.get('/person/:id', function (req, res) {
    res.send('<html> <head></head> <body><h1> Hello  '+ req.params.id + '</h1></body></html>');
});

app.listen(3000);

//environment variables (specific to server our code is living in)
// use variable for setting port dynamically