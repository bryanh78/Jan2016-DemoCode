// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose')


// NEED TO HAVE MULTIPART DATA
var multiparty = require('connect-multiparty')
// Connect multi-party helps our sever understand
// MULTI-PART FORM DATA (Files AND Data)

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
  res.sendFile('master.html', {root : './public/html'})
});

var heroesCtrl = require('./controllers/heroesCtrl.js')
var hqCtrl = require('./controllers/hqCtrl.js')

// GET
app.get('/api/heroes', heroesCtrl.getHeroes)
//"http://localhost:3000/api/heroes"

app.get('/api/heroes/:heroID', heroesCtrl.getHeroes)
//"http://localhost:3000/api/heroes/56cc94ee4e06810c3539d2bc"
// POST

// Only place where you need to use this multipart middleware
// is where you are sending files up to the server
app.post('/api/heroes', multiparty(), heroesCtrl.createHero)

app.post('/api/heroes/:heroID', heroesCtrl.updateHero)



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
