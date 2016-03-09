var Hero = require('../models/heroes.js')
var HQ   = require('../models/hqs.js')

// NEW MODULE
s3 = require('s3')
// Initial Config
s3Client = s3.createClient({
	s3Options :{
		accessKeyId : 'ACCESS KEY',
		secretAccessKey : 'SECRET KEY'
	}
})
	

function createHero (req, res){
	console.log('BODY', req.body)
	console.log('===')
	console.log('FILES', req.files)
	
	var body = req.body.data

	var file = req.files.files

	// Initiate the upload
	var uploader = s3Client.uploadFile({
			localFile : file.path,
			s3Params :{
				Bucket : 'BUCKET NAME', // "droplet" / container for s3 storage
				//Key : '/stuff/' + file.name, // filepath on the bucket where the image will live
				Key : file.name,
				ACL : 'public-read', // Access control
			}
		})




		uploader.on('progress', function(){
			console.log("progress", uploader.progressAmount, uploader.progressTotal)
		})

		
		uploader.on('end', function(){
			
			var url = s3.getPublicUrlHttp('BUCKET NAME', file.name) //Takes Bucket name and filepath IN the bucket
			console.log('URL', url)
			// Find HQ
			HQ.findOne({name : body.HQ}, function(err, foundHQ){

				var hero = new Hero({
					name : body.name,
					powers : body.powers.split(', '),
					MP : +body.MP,
					HP : +body.HP,
					weaknesses : body.weaknesses.split(', '),
					costume : url, //URL that comes back from s3
					bestFriend  : body.bestFriend,
					HQ : foundHQ._id
				})
				hero.save(function(err, savedHero){
					res.send(savedHero)
				})

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

function updateHero (req, res){
		Hero.update({_id : req.params.heroID}, req.body, function(err, updated){

			Hero.findOne({_id : req.params.heroId}, function(err, hero){
				res.send(hero)
			})

		})
}

module.exports = {
	createHero : createHero,
	getHeroes : getHeroes,
	updateHero : updateHero
}
