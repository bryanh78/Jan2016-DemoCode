var mongoose = require('mongoose')

var heroesSchema = mongoose.Schema({
	name       : String,
	powers     : Array, //(name of power and mana cost)
	MP 		   : Number,
	HP         : Number,
	weaknesses : Array, 
	costume    : {}, //Schemaless
	bestFriend : String, 

})

module.exports = mongoose.model('Hero', heroesSchema)

// bestFriend : mongoose.model('BestFriend', bffSchema)



// var list = []

// var Constructor = function(){
// 	this.stuff = things
// 	list.push(this)
// }






