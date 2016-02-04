
var Monkey = function(name, diet, color){
	this.name = name
	this.diet = diet
	this.color = color
}
Monkey.prototype.climb = function(tree){
	console.log(this.name + ' climbs the ' + this.diet + ' tree.')
}

var george = new Monkey('George', 'bananas', 'brown')

// WET
// var FlyingMonkey = function(name, diet, color, wingspan){
// 	this.name = name
// 	this.diet = diet
// 	this.color = color
// 	this.wingspan = wingspan
// }

// FlyingMonkey.prototype.climb = function(tree){
// 	console.log(this.name + ' climbs the ' + tree + ' tree.')
// }

// FlyingMonkey.prototype.fly = function(){
// 	console.log(this.name + ' flies ' + this.wingspan * 20 + ' feet.')
// }


// DRY
var FlyingMonkey = function(name, diet, color, wingspan){

	/*leverages code we've already written to set values on THIS*/
	Monkey.call(this, name, diet, color)
	this.wingspan = wingspan

}

// Now we need to set up the base/super class
FlyingMonkey.prototype = new Monkey()
FlyingMonkey.prototype.constructor = FlyingMonkey
FlyingMonkey.prototype.fly = function(){
	console.log(this.name + ' flies ' + this.wingspan * 20 + ' feet.')
}

var evilGeorge = new FlyingMonkey('Evil George', 'faces', 'black', 7)



var SuperMonkey = function(name, diet, color, wingspan, superPower){
	FlyingMonkey.call(this, name, diet, color, wingspan)
	this.superPower = superPower
	this.toString = 'this is a string'
}
SuperMonkey.prototype = new FlyingMonkey()
SuperMonkey.prototype.constructor = SuperMonkey
SuperMonkey.prototype.useSuperPower = function(){
	console.log(this.name + ' used their power of ' + this.superPower)
}

var superGeorge = new SuperMonkey(
	'Super George', 
	'radioactive bananas',
	'Green/Orange',
	1000,
	'Bananakinesis'
)
