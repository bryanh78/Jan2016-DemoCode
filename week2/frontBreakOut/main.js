// store prompted phone number string in var number
var number = prompt("Please enter your phone number.");

// console.log(number.split("-"));

//split our string into parts to be evaluated i.e. 
//an array of three strings
var stringParts= number.split("-");
//check if characters at indeces 3 and 7 are dashes
if(number.charAt(3) === '-' && number.charAt(7) === '-' && stringParts.length === 3){
	//loop over stringParts to check the individual strings
	for(var i = 0; i<stringParts.length; i++){
		//parseInt : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
		//isFinite : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite
		if(isFinite(parseInt(stringParts[i]))){
			console.log(" It's a number");
		}else{
			console.log(stringParts[i], "is not a number")
		}

	}
}else{
	console.log("NOT a valid phone numer!!")
}


//FUNCTIONS
//Here is a function definition
var whoAmI = function(name){
	return "Hello my name is " + name;
}
//Here we have "invoked" or "called" whoAmI and 
//stored the value whoAmI returns into the variable name
var name = whoAmI("Phil");
console.log(name);
//Here is an array definition.
var myArray = [1,2,3];

//Here is an object definition. 
//Object syntax is var obj = {key:value}
//Notice andrew has a greet method which 
//references the function whoAmI
var andrew = {
	name:"Andrew", 
	wieght: 175, 
	age: 41, 
	scores:[98,67,87], 
	greet: whoAmI
	}

console.log(andrew.greet("Andrew"));






















