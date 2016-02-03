var whatsMyName = function(excited, secondArg, thirdArg){
    console.log(secondArg, thirdArg)
    if ( excited ) {
        var ending = '!!'
    }
    else {
        var ending = '...'
    }
    console.log('My name is ' + this.name + ending)
}
// whatsMyName()

// var alice = {
//     name : 'Alice',
//     greet : whatsMyName
// }

// alice.greet()


var alice = {
    name : 'Alice'
}

// invoke the whatsMyName function, but use the object alice as the value for `this`.
// functions called with `call` might look strange, because all the arguments are offset by one.
// whatsMyName.call(alice, true, 'secondArg', 'thirdArg')


var biggify = function(){
    // console.log(arguments)
    // console.log(arguments.map) // undefined
    var biggerArgs = [].map.call(arguments, function(element){
        return element * 10
    })
    return biggerArgs
}

// console.log(biggify(1,5,7,9))

// this is not valid javascript, but I can pretend I'm doing this by using call
// 'hello'.map(function(element){

// })


var HELLO = [].map.call('hello', function(element){
    return element.toUpperCase()
}).join('')
// console.log(HELLO)

// whatsMyName.apply(alice, [true, 'secondArg', 'thirdArg'])

var numbers = [1,5,10]
// console.log(Math.max(numbers[0], numbers[1], numbers[2])) // this is terrible. not practical at all

// console.log(Math.max(numbers)) // this doesn't work. math.max cannot take an array.

// console.log(Math.max.apply(null, numbers))

var bob = {
    name : 'Bob'
}

var bobSaysHi = whatsMyName.bind(bob)

// bobSaysHi(true)
// bobSaysHi()

var steve = {
    name : 'steve',
    greet : bobSaysHi
}
// `this` still refers to bob, even though we're calling this method off of the steve object.
// steve.greet()


var carlos = {
    name : 'Carlos'
}

var carlosIsHappyToMeetYou = whatsMyName.bind(carlos, true)
// carlosIsHappyToMeetYou(false, 'arg2?', 'arg3?')

// bobSaysHi()
// bob.name = "Bobbert"
// bobSaysHi()



getUserMedia = navigator.mozGetUserMedia || navigator.webkitGetUserMedia || navigator.getUserMedia

if ( getUserMedia ) {
    getUserMedia = getUserMedia.bind(navigator)
}
