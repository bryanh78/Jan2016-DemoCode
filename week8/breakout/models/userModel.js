var mongoose = require('mongoose')

var userSchema = mongoose.Schema({
	username : {type : String, required:true, unique : true, index: 'text'},
	password : {type : String, required:true, index: 'text'},
	favoritePie : String
})

module.exports = mongoose.model('User', userSchema)

https://api.rach.io/1/public/person/info

$http.get('https://api.rach.io/1/public/person/' + userID)
	.then(function(returnData){

	})

$http.post('https://api.rach.io/1/public/device/stop_water', {id : deviceID})
	.then(function(returnData){

	})