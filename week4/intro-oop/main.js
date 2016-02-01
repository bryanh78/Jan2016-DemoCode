// Object Oriented Programming!!!!
// OOP

// Model for programming based on the creation of objects
//  - Attach properties and methods INSTEAD of creating free-floating variables

// BAD
// name = 'Bill'
// name2 = 'George'
// street = '123 Mainst'
// street2 = 'dsasdasdsa'
// street46
// street87

// BETTER
// var bill = {
// 	name : 
// 	street :
// }

// Use CLASSES to describe how objects should be structured
// Create INSTANCES of those CLASSES

// color
// weight
// hairlength
// attitude
// adorability

var Cat = function(name, color, weight, hairLength, attitude, adorability){
	// var this = {}
	// console.log("THIS", this)
	this.name = name;
	this.color = color;
	this.weight = weight;
	this.hairLength = hairLength;
	this.attitude = attitude;
	this.adorability = adorability;
	
	// this.meow = function(){
	// 	console.log(this.name + ' goes meow!')
	// }

	// WITH new keyword
	// return this

	// WITHOUT
	// return undefined

}


// Attatching methods to CAT prototype
Cat.prototype.meow = function(){
	console.log(this.name + ' goes meow!')
}

Cat.prototype.meowFight = function(otherCat){
	console.log(this.name + ' meows at ' + otherCat.name)
}


// Cat.prototype.stuff = {
// 	cats : 'stinky'
// }


// THIS is just an arbitrary object local to its scope
// THIS is immune to closure

// function OUTER(){
// 	this.name = 'steve'
// 	var outerTHIS = this

// 	function INNER(){
// 		this.name
// 		outerTHIS.name
// 	}

// }


var diabloCat = new Cat(
		'Diablo',
		'red',
		17,
		'short',
		'cranky',
		'high'
	)

var steve = new Cat(
		'steve',
		'orange',
		48,
		'long',
		'sleepy',
		'super high'
	)

// var myObj = new Object() -> {}


// CHALLENGE!!

// Create a Quote class that has 2 properties
// 	author
// 	text

// Create 2 instances of your Quote class and console.log them both

// *Bonus : have default values if a value is missing

var Quote = function(author, text){

	this.author = author || 'anonymous';
	this.text = text || '...';

}

var greateQuote = new Quote('DJ Khaled', 'The key to more success, eggwhites.')
var notSoGreatQuote = new Quote()


// CHALLENGE 2!

// Update your Quote class to have a method (on prototype!)

// This method should return the number of WORDS in the quote

Quote.prototype.wordsNumber = function(){
	return this.text.split(' ').length
}

