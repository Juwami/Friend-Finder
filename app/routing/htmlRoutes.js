let http = require("http");
let fs = require("fs");

let PORT = process.env.PORT || 3000;

let server = http.createServer(routeOpt)

function routeOpt(req, res) {
    let path = req.url;

    switch(path) {
        case "/survey":
            return fs.readFile(__dirname + "/survey.html", function(err, data) {
                if (err) throw err;
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            })
        default:
            return fs.readFile(__dirname + "/home.html", function(err, data) {
                if (err) throw err;
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            })
    }
}