// console.log(_)
//---------------\\
//----- Map -----\\
//---------------\\
// var array = [7, 13, 11, 21, 42, 1880];

// CHALLENGE - create a NEW array where each element is 2* its original value
// var doubleDouble = _.map(array, function(number){
// 	return number * 2
// })
// console.log(array, doubleDouble)


//------------------\\
//----- Reduce -----\\
//------------------\\

// Start : "Gym Tan Laundry"

// Goal : "G.T.L."
// var newJoisy = "Gym Tan Laundry"

// var reduceResult = _.reduce(
// 	newJoisy.split(' '),
// 	function(acronymSoFar, currentWord){
// 		console.log(currentWord, acronymSoFar)
// 		return acronymSoFar + currentWord[0] + '.'
// 	},
// 	''
// )
// console.log(reduceResult)


//----- Find -----\\
var teddyBears = [
	{
		name	   : 'Ted',
		fluffiness : 1,
		diet       : 'childrens\' tears',
		huggability: 7,
		ownedBySean: true
	},
	{
		name	   : 'Teddy Ruxspin',
		fluffiness : 10,
		diet       : 'batteries',
		huggability: 5,
		ownedBySean: false
	},
	{
		name	   : 'Steve',
		fluffiness : 1,
		diet       : 'souls',
		huggability: 5,
		ownedBySean: true
	},
	{
		name	   : 'Hulk',
		fluffiness : 1,
		diet       : 'batteries',
		huggability: 5,
		ownedBySean: true
	},
]
// FIND a bear with a huggability of 5
// FILTER would return ALL bears with a huggability of 5
// var huggyBear = _.find(teddyBears, function(bear){
// 	return bear.huggability === 5
// })
// console.log(huggyBear)


//----- Pluck -----\\

// CHALLENGE - Use pluck to make an array of dietary needs
console.log( 'Shopping List : ', _.pluck(teddyBears, 'diet') )

//----- Uniq -----\\

_.uniq( _.pluck(teddyBears, 'diet') )

//----- Chain -----\\

_.chain(teddyBears)
	.pluck('diet')
	.uniq()
	// .map(function(dietaryNeed){
	// 	console.log(dietaryNeed)
	// })
	.value()