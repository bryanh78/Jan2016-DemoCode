var mongoose = require('mongoose')

var hqSchema = mongoose.Schema({
	name : String,
	amenities : Array,
	moatType : String
	// hero : {type : m.s.oid, ref : "Hero"}
})

module.exports = mongoose.model('HQ', hqSchema);
