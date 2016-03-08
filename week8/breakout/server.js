// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose  = require('mongoose');
var passport = require('passport');

var passportConfig = require('./config/passportConfig.js')

// Create Express App Object \\
var app = express();

mongoose.connect('mongodb://localhost/pieshop')

/** Express Session Setup **/
var session = require('express-session')
app.sessionMiddleware = session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
})
app.use(app.sessionMiddleware)
/** End Express Session Setup **/

// Passport hooks into our app
app.use(passport.initialize());
app.use(passport.session());



// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

var middleware = {
	bouncer : function(req, res, next){
		if(req.isAuthenticated()){
			next()
		}
		else {
			res.send('go home')
		}
	}
}

// Controllers
var userCtrl = require('./controllers/userController.js')

// Routes \\
app.get('/', function(req, res){
  res.sendFile('main.html', {root : './public/html/'})
});
app.get('/angular', function(req, res){
  res.sendFile('angular.html', {root : './public/html/'})
});


app.get('/me', function(req, res){
	// send the logged in user back down
	res.send({user : req.user})
})

app.get('/logout', function(req, res){
	req.logOut()
	res.redirect('/')
})


app.post('/signup', userCtrl.userSignup)
app.post('/login', userCtrl.userLogin)

app.get('/supersecret', middleware.bouncer, function(req, res){
	res.send('So secret')
})


// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})