var add = function(a,b,c){
	//ensure that each value is a number 
	a = (typeof a === "number") ? a : 0;
	b = (typeof b === "number") ? a : 0;
	c = (typeof c === "number") ? a : 0;

	return a + b + c;
}
//calling add with some unusal values. did
//our code handle these valuse the way we expected?
var sum = add("something", {1:0, 2:1}, [1,2,3]);
console.log(sum);

//**************************************ARGUMENTS OBJECT*****//
//The arguments object is a local variable available within all functions.
//The arguments object is array-like, corresponding to the argumnets 
//passed in to a function
var anotherAdd = function(a,b,c){
	var total = 0;
//	access all values of the arguments object
	for(var i =0; i<arguments.length; i++){
		total += arguments[i];
	}
	return total;
}

var anotherSum = anotherAdd(1,2,3,4,5,6);
console.log(anotherSum);



//**************************************CALLBACKS*****//

//simple function to say hello
var hello = function(){
	console.log("Hello");
}



//setInterval repeatedly calls a function
//with a specified delay 
//https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval
//we pass our function, hello, as a "Callback" to set interval
//A callback is a function that you don't invoke yourself.
//Some other system invokes it for you.
var id = setInterval(hello, 1000);


//clearInterval  is our callback. clearIntervalcancels 
//repeated action which was set up using setInterval.
//setTimeout Calls a function or executes a code snippet after a specified delay.
//https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout
setTimeout(clearInterval, 5000, id);

var a = 10;
var b = function(){
	var a = 15;
	console.log(a)
}
console.log(a);
b();

//**************************************GARBAGE COLLECTION
var a = {key:10};

//a gets re-assigned so no more references to {key:10} 
// the refecernce on the above line gets garbage collected
a=5; 


var a = {key:{inner:'test'}};
var b = a.key

//a gets re-assigned so no more references to {key:{inner:'test'}}
//that refernce gets garbage collected. However b's reference to 
//{inner:'test'} remains in memory.
a = null;

//***********************************CLOSURE
var  counterConstructor = function(){
	var start = 0;
	var counter = function(){
		return start ++;
	}	
	return counter;
}
//myCounter and yourCounter have independent start references
//start references are not garbage collected as counter within 
//counterConstructor has closure over start. 
var myCounter = counterConstructor();
var yourCounter = counterConstructor();

console.log(myCounter);
console.log(yourCounter);
console.log(myCounter());
console.log(yourCounter());
console.log(myCounter());
console.log(yourCounter());
console.log(myCounter());
console.log(yourCounter());
console.log(myCounter());
console.log(yourCounter());
console.log(myCounter());
console.log(myCounter());
console.log(yourCounter());








 	// console.log(a);
	// a = a || 0;
	// b = b || 0;
	// c = c || 0;
	// //array-like object corresponding to the argumnets 
	//passed in to a function