let friends = require("../data/friends")

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends)
    });

    app.post("/api/friends", function (req, res) {
        friends.push(req.body);
    });

    document.getElementById("submitBtn").onclick = function() {
        console.log("clicked")
    }
};