var HQ   = require('../models/hqs.js')

function createHQ (req, res){

	var newHQ = new HQ({
		name : req.body.name,
		amenities : req.body.amenities.split(', '),
		moatType : req.body.moatType
	})

	newHQ.save(function(err, doc){
		res.send(doc)
	})

}

module.exports = {
	createHQ : createHQ
}