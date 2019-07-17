let path = require("path");

exports = function (app) {

app.get("/survey", function(req, res){
    res.send(path.join(__dirname, "../public/survey.html"))
});

app.get("*", function(req, res) {
    res.send(path.join(__dirname, "../public/home.html"))
});

};