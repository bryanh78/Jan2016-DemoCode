var http = require('http')

var simpleServer = http.createServer(function(request, response){



    response.writeHead(500, {'Content-Type': 'text/html'})
    response.end('<h1>Hello World</h1>')
})

simpleServer.listen(8000)