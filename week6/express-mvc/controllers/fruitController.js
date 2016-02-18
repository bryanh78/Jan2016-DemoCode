// Fruit Controller

// Require model
var FruitModel = require('../models/fruits.js')

// Get Fruits
var getFruits = function(req, res){
	res.send(FruitModel.fruitList);
}

// Create Fruits
var createFruits = function(req, res){
	// Data from client -> req.body
	new FruitModel.Fruit(req.body)
	res.send('goood jaab')
	
}

module.exports = {
	getFruits : getFruits,
	createFruits : createFruits
}