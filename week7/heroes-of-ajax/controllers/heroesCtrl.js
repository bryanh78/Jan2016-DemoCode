var Hero = require('../models/heroes.js')

function createHero (req, res){

	var hero = new Hero({
		name : req.body.name,
		powers : req.body.powers.split(', '),
		MP : +req.body.MP,
		HP : +req.body.HP,
		weaknesses : req.body.weaknesses.split(', '),
		costume : req.body.costume,
		bestFriend  : req.body.bestFriend,
	})
	hero.save(function(err, savedHero){
		res.send(savedHero)
	})
	// console.log(req.body)
	// res.send('woohoo')
}

function getHeroes (req, res){
	// Get ONE
	if(req.params.heroID){
		Hero.findOne({_id : req.params.heroID}, function(err, doc){
			res.send(doc)
		})
	}
	// Get MANY
	else{
		Hero.find({}, function(err, docs){
			res.send(docs)
		})
	}
}

module.exports = {
	createHero : createHero,
	getHeroes : getHeroes
}