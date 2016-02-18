var express = require('express');
var path = require('path');

// var bodyParser = require('body-parser');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(express.static(path.join(__dirname, 'public')));




var myMiddleware = function(req, res, next){
    console.log('middleware!')
    // calling next() tells express that this piece of middleware is finished, and the next one can start. 
    next()
}
// app.use will run for every request coming into the server.


var oops = function(req, res, next){
    console.log('oops!')
    var theError = new Error()
    theError.whatHappenend = 'everything is on fire'
    next(theError)
}
app.use(oops)

app.get('/', function(req, res) {
    console.log('the home page')
    res.send('this is the index') 
});


app.use('/about', myMiddleware) // will catch a partial match


app.get('/about', myMiddleware, function(req, res){ // this will only catch an exact match at /about, not /about/meta
    console.log('the about page')
    res.send('all about this website!')
})
app.get('/about/meta', function(req, res){
    console.log('meta about')
    res.send('all about the about page')
})

app.get('/:dynamicParam', function(req,res){
    req.params.dynamicParam.match(/regex/)
})
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.send("couldn't find what you're looking for...")
});

// error handlers


// production error handler
// no stacktraces leaked to user
// the 'err' passed into the function is the error object created in our oops middleware.
app.use(function(err, req, res, next) {
  console.log('500 error')
  res.status(err.status || 500);
  res.send(err)
});


module.exports = app;

app.listen(3000)