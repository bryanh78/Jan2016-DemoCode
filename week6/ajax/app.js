// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
// Create Express App Object \\
var app = express();
// console.log('DIR : ', __dirname)
// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

var sandwiches = [
	{
		name     : 'Phil Special',
		toppings : ['Mystery Meat', 'Zesty Mayo', 'Rotten Egg'],
		bread    : 'Rye'
	},
	{
		name     : 'Sean Special',
		toppings : ['Salt', 'Hops', 'Sprouts'],
		bread    : 'Lettuce Wrap'
	}
]

// Routes \\
app.get('/', function(req, res){
  res.sendFile('home.html', {root : __dirname + '/public/html'})
});

app.get('/pokemon', function(req, res){
  res.sendFile('pokemon.html', {root : __dirname + '/public/html'})
});

app.get('/api/sandwiches', function(req, res){
	// setTimeout(function(){
		res.send(sandwiches)
	// }, 2500)
})

app.post('/api/sandwiches', function(req, res){
	// Our data will live in req.body
	console.log('Body ->', req.body)
	sandwiches.push({
		name : req.body.name,
		bread : req.body.bread,
		toppings : req.body.toppings.split(', ')
	})

	res.send(sandwiches)

})

// Creating Server and Listening for Connections \\
var port = 4000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})