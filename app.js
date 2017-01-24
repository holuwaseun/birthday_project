const express = require('express')
const url = require('url')

let app = express()

let http = require("http").Server(app)

app.use(express.static(`${__dirname}/public`))
app.use('/scripts', express.static(`${__dirname}/node_modules`))

app.get("*", function(request, response){
    response.sendFile(`${__dirname}/public/app/views/index.html`)
})

http.listen(2286, function(err){
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log("Listening on port 2286")
    }
})