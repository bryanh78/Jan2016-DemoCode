var something = [1,2,3];

function dotheStuff(){
	console.log(arguments)
}
var anotherthing = 'more potatoes please'
var somethingelse = 'yes'

something.forEach(function(element, index, array){
	dotheStuff(element, array)
	console.log('stuff')
})
