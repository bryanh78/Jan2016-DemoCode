var start = performance.now()
var Burglar = function(name){
    this.name = name
    this.dead = false
    this.stuff = ['jewels', 'scimitars', 'lockpicks', 'burglar-mask', 'cell-phone']
}
Burglar.prototype.steal = function(victim){
    if ( victim.stuff.length !== 0 ) {
        this.stuff.push(victim.stuff.pop())
        // console.log(this.name + ' now has ' + this.stuff.join(', ') + '.')
        // console.log(victim.name + ' now has ' + victim.stuff.join(', ') + '.')
        // console.log('=-=-=-=-=-=-=-=-=-=')
    }
    else {
        victim.dead = true
        console.log('hasta la vista, ' + victim.name)
        console.log('=-=-=-=-=-=-=-=-=-=')
    }
}

// var Alice = new Burglar('Alice')
// var Bob   = new Burglar('Bob')
// Alice.steal(Bob)
// console.log(steve)

var cityOfThieves = []

for ( var i = 0; i < 10; i++ ) {
    cityOfThieves.push(new Burglar('person' + i))
}

// console.log(cityOfThieves)


var randomTheft = function(){
    var burglar = cityOfThieves[Math.floor(Math.random() * cityOfThieves.length)]
    var victim  = cityOfThieves[Math.floor(Math.random() * cityOfThieves.length)]
    if ( burglar !== victim ) {
        burglar.steal(victim)
    }
}

var burgleInterval = setInterval(function(){

    cityOfThieves = cityOfThieves.filter(function(thief){
        if      ( thief.dead === false ) { return true  }
        else if ( thief.dead === true  ) { return false }

    })
    if ( cityOfThieves.length > 1 ) {
        randomTheft()
    }
    else {
        console.log(cityOfThieves[0].name + ' says: There can only be one.')
        clearInterval(burgleInterval)
        console.log('stop: ', performance.now())
    }

}, 0)


