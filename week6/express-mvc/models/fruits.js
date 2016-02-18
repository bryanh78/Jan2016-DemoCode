// Fruit Model
var allDaFruits = [
	{
		name : 'Clayberries',
		texture : 'puffy',
		color : 'pale',
		taste : 'poor'
	}
]

var Fruit = function(fruitInfo){
	this.name = fruitInfo.name
	this.texture = fruitInfo.texture
	this.color = fruitInfo.color
	this.taste = fruitInfo.taste
	allDaFruits.push(this)
}

module.exports = {
	Fruit : Fruit,
	fruitList : allDaFruits
}