// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');

// Create an Express app object \\
var app = express();

app.use(logger('dev'));
// q=mysearch&somethingelse=stuff
// {
// 	q : 'mysearch',
// 	somethingelse : 'stuff'
// }
// 'http://localhost:3000/?name=bill&job=billder'
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// Serve static files from the public directory
app.use(express.static(__dirname + '/public'));

app.get('/superduper.txt', function(req, res){
	res.send('You should never see me')
})

// Routes \\
// Index / home route -> '/'
// got that route -> cb(expressRequest, expressResponse)
app.get('/', function(req, res){
	console.log(req.query)
	res.sendFile('index.html', {root : './public/html'})
})
app.get('/about', function(req, res){
	res.send('Welcome to my about page.  I like long walks on the beach')
})

// Parameterized Route \\
app.get('/users/:username/:pass', function(req, res){
	console.log(req.params)
	
	res.send('<marquee>Welcome Back ' + req.params.username + '(' + req.params.pass + ')!</marquee>')
})

app.get('/createuser', function(req, res){
	res.send('creating...')
})
app.post('/createuser', function(req, res){
	console.log(req.body)

	res.redirect('/users/' + req.body.username + '/' + req.body.password)
})


// Listen for connections \\
app.listen(3000, function(){
	console.log('Yo server is up')
})
