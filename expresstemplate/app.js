var express = require('express');
var app = express();

var bodyParser = require('body-parser');
// install ejs
// install body-parser too npm install body-parser --save
// require PORT variable locally if process.env.PORT is undefined
if (!process.env.PORT) { 
	env =  require('./env.js'); 
}
var port = process.env.PORT || 3000;



//POST request handling via body-parser middleware - see index.ejs form
var urlencodedParser = bodyParser.urlencoded({ extended: false});
//POST request as JSON - if browser sends json in body this parser intercepts it and parses it 
var jsonParser = bodyParser.json();


// middleware express
app.use('/assets', express.static(__dirname + '/public'));
//template engine used is ejs with <% %> notation
// all templatefiles are expected to use the ".ejs" extension
app.set('view engine', 'ejs');

// self-defined middleware function 
app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});

app.get('/', function(req, res) {
	res.render('index');
});

//object defined with ID property handed over to res.render that will look for a person.ejs file to render
// you call page http://localhost:3000/person/sven?qstr=whatever and Querystring whatever appears
// this is a way to grab querystrings from http get requests
app.get('/person/:id', function(req, res) {
	res.render('person', { ID: req.params.id, Qstr: req.query.qstr });	
});

// middleware urlencoded Parser used to process data sent in http body
app.post('/person', urlencodedParser, function(req, res) {
	res.send("thanks!");
	console.log(req.body.firstname);
	console.log(req.body.lastname);
});


app.post('/personjson', jsonParser, function(req,res) {
	//res.redirect('/personjson');
	res.send('thanks for the json data!');

	console.log(req.body.firstname);
	console.log(req.body.lastname);
});


app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);
