const http = require('http')

const server = http.createServer(function(request, response){
    response.setHeader("Content-Type", "text/html; charset=utf-8;")

    if (request.url === "/home" || request.url === "/"){
        response.write("<h2>Home</h2>")
    }
    else if (request.url === "/mr.mixear"){
        response.write("<h2>Ходос Михайло</h2>")
        response.write("<h2>Другий курс</h2>")
        response.write("<h2>Група ІС-11</h2>")
    }
})

server.listen(3000, () => {
    console.log('Server started')
})