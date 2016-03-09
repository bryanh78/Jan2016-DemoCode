var mongoose = require('mongoose')

var heroesSchema = mongoose.Schema({
	name       : String,
	powers     : Array, //(name of power and mana cost)
	MP 		   : Number,
	HP         : Number,
	weaknesses : Array, 
	costume    : {}, //Schemaless
	bestFriend : String,
	HQ         : {type : mongoose.Schema.ObjectId, ref : "HQ"}

	// HQs         : [{type : mongoose.Schema.ObjectId, ref : "HQ"}]
	// userName   : {type : String, unique:true}


})
// ObjectId("56cc94ee4e06810c3539d2bc")
// "56cc94ee4e06810c3539d2bc" === "56cc94ee4e06810c3539d2bc"
// doc._id.toString() === '23189090u8i132'
module.exports = mongoose.model('Hero', heroesSchema)

// bestFriend : mongoose.model('BestFriend', bffSchema)



// var list = []

// var Constructor = function(){
// 	this.stuff = things
// 	list.push(this)
// }






