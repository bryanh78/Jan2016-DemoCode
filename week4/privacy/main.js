// var foo = 10
// var bar = false
// var baz = 'hello'

// var myAppNames = {
//     foo : 10,
//     bar : false,
//     baz : 'hello'
// }

// Immediately Invoked Function Expression IIFE
var Person = (function(){
    var people = []
    var PersonConstructor = function(first, last, eyeColor, weirdHabit){
        this.first = first
        this.last = last
        this.eyeColor = eyeColor
        this.weirdHabit = weirdHabit
        people.push(this)
    }

    // fullname is an implementation detail.
    // fullName is a private method. It can be accessed by other methods in this class,
    // but not by code outside of this class.
    var fullName = function(that){
        return that.first + ' ' + that.last
    }

    // listPeople is a static method, meaning it belongs to the class in general, not to any particular instance. 
    PersonConstructor.listPeople = function(){
        console.log(people)
    }

    // this is a higher-level overview.
    // this would be called a public method
    PersonConstructor.prototype.whatAreYouDoing = function(){
        console.log(fullName(this) + ' stares at you with their ' + this.eyeColor + ' eyes, while they ' + this.weirdHabit + '.')
    }

    // both fullName and whatAreYouDoing are instance methods. Each instance of our class has access to them.

    return PersonConstructor

})()


var reginald = new Person('Reginald', 'BoBeginald', 'purple', 'beatbox')
reginald.whatAreYouDoing()

var paytonManning = new Person ('Payton', 'Manning', 'H.G.H', 'not retiring when he should have')
paytonManning.whatAreYouDoing()

