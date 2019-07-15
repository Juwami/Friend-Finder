let http = require("http");
let fs = require("fs");

let PORT = process.env.PORT || 3000;

let server = http.createServer(routeOpt)

function routeOpt(req, res) {
    let path = req.url;

    
}