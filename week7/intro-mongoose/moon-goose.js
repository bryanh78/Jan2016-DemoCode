// Require mongoose
var mongoose = require('mongoose')

// We need to connect to DB
mongoose.connect('mongodb://localhost/mangoDB')
// Similar to -> 'use mangoDB'

// Define how our data is going to look
var butterflySchema = mongoose.Schema({
	// This is where we define our objects structure
	colors     : {type : Array, default : []},
	numWings   : {type : Number},
	wingSpan   : Number,
	prettiness : Number,
	eyes       : {type : Boolean, default : true},
	// deleted    : {type : Boolean, default : false},
	
})

// Register the collection
var Butterfly = mongoose.model('Butterfly', butterflySchema)
// Becomes entry point for our collection
// Similar to -> db.<COLLECTIONNAME>
// show collections -> 'bflies'
// db.bflies.---()

// var buttahfly = new Butterfly({
// 	colors : ['Orange', 'Blue'],
// 	numWings : 1,
// 	wingSpan : 'Potato',
// 	prettiness : function(){},
// })

// // Interacting with mongoose is ALWAYS asynchrnous!
// buttahfly.save(function(err, document){
// 	console.log('Error : ', err)
// 	console.log('Docu : ', document)
// })


// Querying in Mongoose
// FIND documents from the DB
Butterfly.find({wingSpan : {$gt : 4}}, function(err, butterflies){
	// console.log(err, matchedDocs)
	
	if(err){
		// do some error stuff
	}
	else{
	
		butterflies.forEach(function(butterfly){
			console.log('I can fly ' + butterfly.wingSpan + ' international butterfly distance units!')
		})
	}
})

// db.butterflies.find({wingspan : 3})

// Common methods!
// .find()
// .findOne()
// .update()
// .remove()
// newDoc = new COLLECTION()
// newDoc.save()

// More Advanced
// .populate()
// .sort()

