let path = require("path");

exports = function (app) {

    // route to send to survey.html
    app.get("/survey", function (req, res) {
        res.send(path.join(__dirname, "../public/survey.html"))
    });

    // default catch all route for anything but survey to go directly to home.html
    app.get("*", function (req, res) {
        res.send(path.join(__dirname, "../public/home.html"))
    });

};