// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
// Create Express App Object \\
var app = express();

mongoose.connect('mongodb://localhost/routingbreakout')

// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// localhost:3000/html/about.html -> res.sendFile
// localhost:3000/html/aboasdasdzxct.html -> //Xres.sendFileX


// Routes \\
app.get('/', function(req, res){
  res.sendFile('shell.html', {root : './public/html'})
});

// app.get('/about', function(req, res){
//   res.sendFile('about.html', {root : './public/html'})
// });

// app.get('/stuff', function(req, res){
//   res.sendFile('stuff.html', {root : './public/html'})
// });

// app.get('/robots', function(req, res){
//   res.sendFile('robots.html', {root : './public/html'})
// });

// app.get('/api/user')
// app.get('/api/user/:id')
// app.post('/api/user/')
// app.post('/api/user/:id')
// app.delete('/api/user/:id')

// app.get('/api/robots')
// app.get('/api/robots/:id')
// app.post('/api/robots/')
// app.post('/api/robots/:id')
// app.delete('/api/robots/:id')



// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})