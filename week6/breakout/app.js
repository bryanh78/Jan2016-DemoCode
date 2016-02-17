// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res){
	console.log('/ ->', req.query)
	var extraInfo = req.query.info || ''
	res.send('Hello ' + extraInfo)
});
// 'http://localhost:3000/?info=duck'

app.get('/about', function(req, res){
	console.log('/about ->', req.query)
	res.send('About')
})

app.get('/:animal', function(req, res){
	console.log('/:animal ->', req.params)
	res.send(req.params.animal)
})

// 'http://google.com?name=bill&password=12345'


// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
	console.log('Server running on port ' + port);
})