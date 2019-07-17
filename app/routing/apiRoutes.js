let path = require("path")

exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json()
    })

    app.post("/api/friends", function(res, req) {

    })
}