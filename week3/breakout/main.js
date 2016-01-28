var Person = function(){
    this.name = 'steve'
}

var outer = function(){

    var arr = []

    for ( var i = 0; i < 10000; i++ ) {
        arr.push(new Person())
    }
    var inner = function(){
        arr.pop()
        console.log(arr.length)
    }
    return inner
}

var popper = outer()
// var arr = []
// var personMaker = function(){


//     for ( var i = 0; i < 10000; i++ ) {
//         arr.push(new Person())
//     }
// }

// personMaker()