// LITERAL numbers
4
10
3.1415926535897
-10

// console.log( 2 + 2 )

// console.log(10 % 3)

var x = 1

var result = 10 % 3
// console.log(result)


// LITERAL strings

'Hello'
"A witty saying proves nothing."
"Dont do it."

var greeting = "helloooooooo " + "world"
// console.log(greeting)

var eleven = 1 + '1'
// console.log(eleven)

var mathGreeting = greeting + eleven
// console.log(mathGreeting)


// console.log(greeting['length'])
// console.log(greeting.length)

var property = 'length'

// this won't work
// console.log(greeting.property)

// console.log(greeting[property])

// gotta use bracket notation to access indexes
// console.log(greeting[1])


// can't use dot notation to access string indexes
// console.log(greeting.1)


// LITERAL boolean
true
false

// console.log(!!false)

// console.log( true && true )
// console.log( false && true )
// console.log( true && true && true && true && false && true )


// console.log( false || false || false || true || false )

// console.log(10 < 15)

// javascript COERCES the number 10 into the string '10'
// console.log(10 == '10') 

// console.log(10 === '10')

var x = 4

// console.log(x === 10 || x === '10')

// if ( x > 5 ) {
//     console.log("It's greater!!")
// }
// else if ( x === 5 ) {
//     console.log("It's equal!!")
// }
// else if ( x === 5 ) {
//     console.log('...')
// }
// else {
//     console.log('none of the above.')
// }



var age = 19
var country = 'Ireland'
var canDrink
if ( age >= 21 ) {
    canDrink = true
}
else if ( age >= 18 && country === 'Ireland') {
    canDrink = true
}
else {
    canDrink = false
}

// console.log('Will you be served? ' + canDrink + '.')

// console.log(null)


if ( NaN ) {
    console.log('hello!')
}


// LITERAL array
[]


var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

// console.log(days[2])
// console.log(days.length)
days[0] = 'Mondaaaaaaayyyy........'
// console.log(days)

// parentheses indicate that we are CALLING or INVOKING the method
// days.push('RaphaelDay')
// console.log(days)
// console.log(days.length)
// days.pop()
// days.pop()
// days.pop()
// days.pop()
// days.pop()
// console.log(days)

var x = 10
// x++
// x+=1
// x = x + 1
// console.log(x)

// for ( var i = 0; i < days.length; i++ ) {
//     // console.log(i)
//     if ( days[i] === 'Saturday' ) {
//         console.log('party!!')
//     }
//     else if ( days[i] === 'Sunday' ) {
//         console.log('take a nap...')
//     }
//     else {
//         console.log('work work work...')
//     }
// }

// LITERAL object
{}


var sharkNado = {
    title : 'Sharknado II',
    genre : 'RomCom',
    rating : '11/10',
}

// console.log(sharkNado.title)
// console.log(sharkNado['rating'])
// console.log(sharkNado)
// for ( var key in sharkNado ) {
//     console.log(sharkNado[key])

// }

var frozen = {
    title : 'Frozen',
    rating : 'nc-17',
    genre : 'historical autobiography',
}


frozen['ye' + 'ar'] = 'recently'
// console.log(frozen)

var myMovies = [sharkNado, frozen];



// LITERAL function
// function(){
//     console.log('hi')
// }

var calculateArea = function(height, width){ // this function takes two ARGUMENTS: height and width
    var area = height * width;
    return area // the RETURN statement defines the output of a function.
}

// console.log(typeof calculateArea())

var result = calculateArea(10, 4) // we CALL a function by naming it, putting parentheses after it, and PASSING its ARGUMENTS in. 
// console.log(calculateArea(11,3))
// console.log(result)

var anotherReference = calculateArea // this is another reference to the same function
var squareFeet = anotherReference(100,200)
// console.log(squareFeet)

// console.log(typeof anotherReference)


var myFunction = function(){

}
myFunction()
var steve = { name : 'steve'}
var janet = { name : 'janet'}

// steve.someMethod = function(){ // you can define methods right on the object.

// }
steve.doSomething    = myFunction
janet.doSomethingToo = myFunction


steve.doSomething() // in addition to being a function, doSomething is a METHOD
janet.doSomethingToo()


var pluralize = function(word, number){
    if ( number === 1 ) {
        return word // only one return statement will run
    }
    else {
        return word + 's'
    }
    return 1
    return 2
}

// console.log(pluralize('chair', 1))
// console.log(pluralize('mongoose', 17))

var people = [
    { name : 'Alice'},
    { name : 'Bob'}
]

names = ['Alice', 'Bob']
var bob = {
    name : names[1]
}


var hello = 'hello!'
// console.log(hello.toUpperCase())
// console.log(hello.toLowerCase())

var weekString = 'Monday Tuesday Wednesday Thursday Friday'

var weekArray = weekString.split(' ')
// console.log(weekArray)

var weekString = weekArray.join(', ')
// console.log(weekString)




var concat =  function(word1, word2){
    var output = word1 + ' ' + word2 // variables defined inside of a function are LOCAL to that function
    return output
}
var sometOtherFunction = function(){
    var output = 'output' // we're reusing a variable name, but our output variables are in different scopes, so they won't interfere with each other. 
    return output
}
var sentence = concat('Write', 'code!')
console.log(sentence)

// console.log(output) // variables defined inside of a function cannot be accessed outside of that function

var globalVariable = 5
var whatsGlobal = function(){

    return globalVariable
}

console.log(whatsGlobal())