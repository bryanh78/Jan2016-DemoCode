


// var capWords = function(wordsArray){
//     var output = []
//     for ( var i = 0; i < wordsArray.length; i++ ) {
//         output[i] = capOneWord(wordsArray[i])
//     }
//     return output
// }


// var capWords = function(wordsArray){
//     var output = []
//     wordsArray.forEach(function(element){
//         output.push(capOneWord(element))
//     })
//     return output
// }

// var words = ['this', 'is', 'a', 'string']
// var capOneWord = function(oneWord){
//     return oneWord.toUpperCase()
// }
// var mapCallback = function(element){

//     console.log(element)
//     console.log(index)
//     console.log(array)
//     return capOneWord(element)
// }
// var capWords = function(wordsArray){
//     return wordsArray.map(mapCallback)
// }

// // var capitalizedWords = capWords(words)
// // console.log(capitalizedWords)

var people = [
    'Alice Bobbits',
    'Bob Baggins',
    'Carlos Carlyle',
    'Dan Blathers'
]

// var clubMembers = people.filter(function(element){
//     var howManyB = 0
//     for ( var i = 0; i < element.length; i++ ){
//         if ( element[i].toLowerCase() === 'b' ) {
//             howManyB++
//         }
//     } 
//     if ( howManyB > 1 ) { return true }
//     else { return false }
// })


// <div ng-repeat="person in people | filter : clubFilter"></div>
// $scope.people = [
//     'Alice Bobbits',
//     'Bob Baggins',
//     'Carlos Carlyle',
//     'Dan Blathers'
// ]

// $scope.enoughB = function(element){
//     var howManyB = 0
//     for ( var i = 0; i < element.length; i++ ){
//         if ( element[i].toLowerCase() === 'b' ) {
//             howManyB++
//         }
//     } 
//     if ( howManyB > 1 ) { return true }
//     else { return false }
// }

// $scope.clubFilter = $scope.enoughB

// $scope.clubFilter = $scope.enoughA


// var money = 1000
var cart = [100, 200, 40, 400, 100]

// var leftOverCash = cart.reduce(function(runningTotal, element){
//     console.log(runningTotal)
//     return runningTotal - element
// },0)

// console.log(leftOverCash)


// cart.sort(function(a, b){
//     return b - a
// })
var people = [{name:'Alice'},{name:'Bob'}]
people.sort(function(a,b){
    if ( a.name < b.name ) { return 1 }
    if ( a.name > b.name ) { return -1 }
    if ( a.name === b.name ) { return 0 }
})
// method chaining is fun!
// sortedPeople = people.filter(clubFilter).sort(alphaSort)