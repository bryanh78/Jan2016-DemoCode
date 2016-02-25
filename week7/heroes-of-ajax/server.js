// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
// Create Express App Object \\
var app = express();

mongoose.connect('mongodb://localhost/heroes-of-ajax')

// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res){
  res.sendFile('home.html', {root : './public/html'})
});

app.get('/heroes/:heroID', function(req, res){
	res.sendFile('hero.html', {root : './public/html'})
})

var heroesCtrl = require('./controllers/heroesCtrl.js')
var hqCtrl = require('./controllers/hqCtrl.js')

// GET
app.get('/api/heroes', heroesCtrl.getHeroes)
//"http://localhost:3000/api/heroes"

app.get('/api/heroes/:heroID', heroesCtrl.getHeroes)
//"http://localhost:3000/api/heroes/56cc94ee4e06810c3539d2bc"
// POST
app.post('/api/heroes', heroesCtrl.createHero)


app.post('/api/hqs', hqCtrl.createHQ)




// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})


// Module.exports / Require trace
// exports 	     require
// MODEL      => CONTROLLER
// CONTROLLER => SERVER.JS