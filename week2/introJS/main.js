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

console.log('Will you be served? ' + canDrink + '.')




