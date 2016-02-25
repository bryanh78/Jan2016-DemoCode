var Hero = require('../models/heroes.js')
var HQ   = require('../models/hqs.js')

function createHero (req, res){

// Find HQ
	HQ.findOne({name : req.body.HQ}, function(err, foundHQ){

		var hero = new Hero({
			name : req.body.name,
			powers : req.body.powers.split(', '),
			MP : +req.body.MP,
			HP : +req.body.HP,
			weaknesses : req.body.weaknesses.split(', '),
			costume : req.body.costume,
			bestFriend  : req.body.bestFriend,
			HQ : foundHQ._id
		})
		hero.save(function(err, savedHero){
			res.send(savedHero)
		})

	})


	
	// console.log(req.body)
	// res.send('woohoo')
}

function getHeroes (req, res){

	// Our HQ property on our hero documents will ALWAYS be JUST the _id of the HQ
	// Populate allows us to turn that into the full Document


	console.log('params', req.params)
	var defaultPop = 'HQ'
	// if(stuff){
	// 	defaultPop+=' bestFriend'
	// }
	// Get ONE
	if(req.params.heroID){
		Hero.findOne({_id : req.params.heroID})
			// .sort()
			// .where()
			.populate(defaultPop)
			.exec(function(err, doc){
				res.send(doc)
			})


			// .populate({ 
			// 	path: 'HQ',
			// 	populate: [
			// 		{
			// 			path: 'amenities',
			// 			model: 'Amenity'
			// 		},
			// 		{
			// 			path : 'moatType',
			// 			model : 'Moat'
			// 		}
			// 	] 
			// })

	}
	// Get MANY
	else{
		Hero.find({}, function(err, docs){
			// Find will ALWAYS give you back an array, even if it finds one or none
			res.send(docs)
		})
	}
}

module.exports = {
	createHero : createHero,
	getHeroes : getHeroes
}