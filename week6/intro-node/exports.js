var foo = 10
var secret = 'this is a secret!'
// the function bar has closure over the variable secret, so bar can work properly, even if secret is no longer accessible.
var bar = function(){
    console.log(secret)
}
module.exports = {
    foo : foo,
    bar : bar 
}