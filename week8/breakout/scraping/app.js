var request =  require('request')
var cheerio = require('cheerio')

request('http://xkcd.com', function(err, data){
    // console.log(data.body)
     $ = cheerio.load(data.body)
     console.log($('#comic img').attr('title'))

})

